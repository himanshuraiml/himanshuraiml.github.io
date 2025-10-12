import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient(supabaseUrl, supabaseAnonKey);
}

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'book' | 'preprint';
  pages?: string;
  volume?: string;
  issue?: string;
  doi?: string;
  url?: string;
  citations: number;
  abstract: string;
  keywords: string[];
  award?: string;
  last_synced?: string;
  created_at: string;
  updated_at: string;
};

export async function getPublications(): Promise<Publication[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .order('year', { ascending: false });

  if (error) {
    console.error('Error fetching publications:', error);
    return [];
  }

  return data || [];
}

export async function syncGoogleScholar(scholarId: string): Promise<{ success: boolean; count?: number; error?: string; debug?: any }> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const apiUrl = `${supabaseUrl}/functions/v1/sync-google-scholar`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ scholarId }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to sync Google Scholar');
    }

    return { success: true, count: result.count };
  } catch (error) {
    console.error('Error syncing Google Scholar:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function seedInitialPublications(): Promise<{ success: boolean; count?: number; error?: string }> {
  try {
    const initialPublications = [
      {
        title: "Churn Prediction in Social Networks Using Modified BiLSTM‑CNN Model",
        authors: ["H. Rai", "J. Kesarwani"],
        venue: "AI‑Based Advanced Optimization Techniques for Edge Computing",
        year: 2025,
        type: "journal",
        doi: "10.1002/9781394287062.ch8",
        citations: 5,
        abstract: "This work presents a modified BiLSTM-CNN model for predicting customer churn in social networks, demonstrating improved accuracy over traditional approaches through advanced deep learning architectures.",
        keywords: ["BiLSTM-CNN", "Churn Prediction", "Social Networks", "Deep Learning"]
      },
      {
        title: "Modified XceptionNet Architecture for Accurate Fake Image Classification on Real‑Fake HQ Dataset",
        authors: ["S. Sinha", "J. Kesarwani", "V. Tiwari", "H. Rai"],
        venue: "International Conference on Artificial Intelligence and Sustainable Innovation",
        year: 2025,
        type: "conference",
        citations: 2,
        abstract: "We propose a modified XceptionNet architecture that achieves superior performance in detecting fake images, addressing the growing concern of deepfakes and manipulated visual content.",
        keywords: ["XceptionNet", "Fake Image Detection", "Computer Vision", "Deep Learning"]
      },
      {
        title: "A Hybrid Approach for Process Scheduling in Cloud Environment Using Particle Swarm Optimization Technique",
        authors: ["H. Rai", "S. K. Ojha", "A. Nazarov"],
        venue: "International Conference Engineering and Telecommunication (En&T)",
        year: 2020,
        type: "conference",
        pages: "1-5",
        doi: "10.1109/EnT50437.2020.9431318",
        citations: 15,
        abstract: "This paper presents a hybrid approach combining particle swarm optimization with traditional scheduling algorithms to improve process scheduling efficiency in cloud computing environments.",
        keywords: ["Process Scheduling", "Cloud Computing", "Particle Swarm Optimization", "Hybrid Algorithms"]
      },
      {
        title: "Generative Adversarial Networks (GANs): Introduction and vista",
        authors: ["J. Kesarwani", "H. Rai"],
        venue: "CRC Press eBooks",
        year: 2023,
        type: "book",
        pages: "27-34",
        doi: "10.1201/9781032684994-5",
        citations: 8,
        abstract: "This chapter provides a comprehensive introduction to Generative Adversarial Networks, exploring their architecture, applications, and future prospects in various domains.",
        keywords: ["Generative Adversarial Networks", "GANs", "Deep Learning", "Generative Models"]
      }
    ];

    const supabase = getSupabase();
    let successCount = 0;
    for (const pub of initialPublications) {
      const { error } = await supabase
        .from('publications')
        .upsert({
          title: pub.title,
          authors: pub.authors,
          venue: pub.venue,
          year: pub.year,
          type: pub.type,
          pages: pub.pages,
          doi: pub.doi,
          citations: pub.citations,
          abstract: pub.abstract,
          keywords: pub.keywords,
          last_synced: new Date().toISOString(),
        }, { onConflict: 'title' });

      if (!error) {
        successCount++;
      }
    }

    return { success: true, count: successCount };
  } catch (error) {
    console.error('Error seeding publications:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
