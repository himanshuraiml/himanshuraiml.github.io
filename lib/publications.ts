import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export async function syncGoogleScholar(scholarId: string): Promise<{ success: boolean; count?: number; error?: string }> {
  try {
    const apiUrl = `${supabaseUrl}/functions/v1/sync-google-scholar`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ scholarId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to sync Google Scholar');
    }

    const result = await response.json();
    return { success: true, count: result.count };
  } catch (error) {
    console.error('Error syncing Google Scholar:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
