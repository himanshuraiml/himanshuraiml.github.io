import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { DOMParser } from "npm:linkedom@0.14.26";

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

    const scholarUrl = `https://scholar.google.com/citations?user=${scholarId}&hl=en&cstart=0&pagesize=100`;
    
    console.log(`Fetching from: ${scholarUrl}`);
    
    const response = await fetch(scholarUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Cache-Control": "max-age=0",
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch Google Scholar profile: ${response.status}`);
    }

    const html = await response.text();
    console.log(`Fetched HTML length: ${html.length}`);
    
    if (html.includes('captcha')) {
      throw new Error("Google Scholar returned a captcha. Please try again later or use a different approach.");
    }
    
    const publications: Publication[] = parseGoogleScholarHTML(html);
    console.log(`Parsed ${publications.length} publications`);

    if (publications.length === 0) {
      return new Response(
        JSON.stringify({ 
          error: "No publications found. This could be due to: 1) Invalid Scholar ID, 2) Google Scholar blocking requests, or 3) Parsing issues.",
          debug: {
            htmlLength: html.length,
            scholarUrl,
            htmlSnippet: html.substring(0, 500)
          }
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    let insertedCount = 0;
    let errorCount = 0;

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
        errorCount++;
      } else {
        insertedCount++;
      }
    }

    console.log(`Successfully inserted/updated ${insertedCount} publications, ${errorCount} errors`);

    return new Response(
      JSON.stringify({
        success: true,
        count: publications.length,
        inserted: insertedCount,
        errors: errorCount,
        publications: publications.slice(0, 5),
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error syncing Google Scholar:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        stack: error.stack 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function parseGoogleScholarHTML(html: string): Publication[] {
  const publications: Publication[] = [];
  
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const rows = doc.querySelectorAll('tr.gsc_a_tr');
    console.log(`Found ${rows.length} publication rows`);
    
    rows.forEach((row: any) => {
      try {
        const titleElement = row.querySelector('.gsc_a_at');
        const title = titleElement ? titleElement.textContent.trim() : '';
        
        const authorElements = row.querySelectorAll('.gs_gray');
        let authorsText = '';
        let venueText = '';
        
        if (authorElements.length >= 2) {
          authorsText = authorElements[0].textContent.trim();
          venueText = authorElements[1].textContent.trim();
        }
        
        const yearElement = row.querySelector('.gsc_a_y .gsc_a_h');
        const yearText = yearElement ? yearElement.textContent.trim() : '';
        const year = yearText ? parseInt(yearText, 10) : new Date().getFullYear();
        
        const citationElement = row.querySelector('.gsc_a_c .gsc_a_ac');
        const citationText = citationElement ? citationElement.textContent.trim() : '0';
        const citations = citationText && citationText !== '' ? parseInt(citationText, 10) : 0;
        
        const linkElement = row.querySelector('.gsc_a_at');
        let url = '';
        if (linkElement && linkElement.getAttribute('href')) {
          url = 'https://scholar.google.com' + linkElement.getAttribute('href');
        }
        
        if (title) {
          const authors = authorsText ? authorsText.split(',').map(a => a.trim()).filter(a => a.length > 0) : ['Unknown'];
          const venue = venueText || 'Unknown Venue';
          
          publications.push({
            title,
            authors,
            venue,
            year,
            citations: isNaN(citations) ? 0 : citations,
            url: url || undefined,
          });
        }
      } catch (rowError) {
        console.error('Error parsing row:', rowError);
      }
    });
    
  } catch (parseError) {
    console.error('Error parsing HTML with DOM parser:', parseError);
    
    const titleRegex = /<a[^>]*class="gsc_a_at"[^>]*>([^<]+)<\/a>/g;
    const titles = Array.from(html.matchAll(titleRegex));
    console.log(`Fallback regex found ${titles.length} titles`);
    
    titles.forEach((match) => {
      publications.push({
        title: match[1].trim(),
        authors: ['Unknown'],
        venue: 'Unknown Venue',
        year: new Date().getFullYear(),
        citations: 0,
      });
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
