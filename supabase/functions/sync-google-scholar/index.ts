import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations: number;
  url?: string;
  abstract?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { scholarId } = await req.json();
    
    if (!scholarId) {
      return new Response(
        JSON.stringify({ error: "Google Scholar ID is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const scholarUrl = `https://scholar.google.com/citations?user=${scholarId}&hl=en`;
    
    const response = await fetch(scholarUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Google Scholar profile");
    }

    const html = await response.text();
    
    const publications: Publication[] = parseGoogleScholarHTML(html);

    for (const pub of publications) {
      const { error } = await supabase
        .from("publications")
        .upsert(
          {
            title: pub.title,
            authors: pub.authors,
            venue: pub.venue,
            year: pub.year,
            citations: pub.citations,
            url: pub.url,
            abstract: pub.abstract || "",
            keywords: [],
            type: inferPublicationType(pub.venue),
            last_synced: new Date().toISOString(),
          },
          { onConflict: "title" }
        );

      if (error) {
        console.error("Error upserting publication:", error);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        count: publications.length,
        publications,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error syncing Google Scholar:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function parseGoogleScholarHTML(html: string): Publication[] {
  const publications: Publication[] = [];
  
  const titleRegex = /<a[^>]*class="gsc_a_at"[^>]*>([^<]+)<\/a>/g;
  const authorVenueRegex = /<div class="gs_gray">([^<]+)<\/div>\s*<div class="gs_gray">([^<]+)<\/div>/g;
  const citationRegex = /<a[^>]*class="gsc_a_ac gs_ibl"[^>]*>(\d+)<\/a>/g;
  const yearRegex = /<span class="gsc_a_h gsc_a_hc gs_ibl">(\d{4})<\/span>/g;
  
  const titles = Array.from(html.matchAll(titleRegex)).map(m => m[1]);
  const authorVenues = Array.from(html.matchAll(authorVenueRegex));
  const citations = Array.from(html.matchAll(citationRegex)).map(m => parseInt(m[1], 10));
  const years = Array.from(html.matchAll(yearRegex)).map(m => parseInt(m[1], 10));
  
  const minLength = Math.min(titles.length, authorVenues.length, years.length);
  
  for (let i = 0; i < minLength; i++) {
    const authorsText = authorVenues[i][1];
    const venueText = authorVenues[i][2];
    
    publications.push({
      title: titles[i].trim(),
      authors: authorsText.split(",").map(a => a.trim()),
      venue: venueText.trim(),
      year: years[i],
      citations: citations[i] || 0,
    });
  }
  
  return publications;
}

function inferPublicationType(venue: string): string {
  const venueLower = venue.toLowerCase();
  
  if (venueLower.includes("journal") || venueLower.includes("transactions")) {
    return "journal";
  }
  if (venueLower.includes("conference") || venueLower.includes("proceedings")) {
    return "conference";
  }
  if (venueLower.includes("workshop")) {
    return "workshop";
  }
  if (venueLower.includes("book") || venueLower.includes("chapter")) {
    return "book";
  }
  if (venueLower.includes("arxiv") || venueLower.includes("preprint")) {
    return "preprint";
  }
  
  return "conference";
}
