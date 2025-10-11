/*
  # Create Publications Table

  1. New Tables
    - `publications`
      - `id` (uuid, primary key) - Unique identifier for each publication
      - `title` (text, unique, not null) - Publication title
      - `authors` (text[], not null) - Array of author names
      - `venue` (text, not null) - Publication venue (journal, conference, etc.)
      - `year` (integer, not null) - Publication year
      - `type` (text, not null) - Type of publication (journal, conference, workshop, book, preprint)
      - `pages` (text) - Page numbers
      - `volume` (text) - Volume number
      - `issue` (text) - Issue number
      - `doi` (text) - Digital Object Identifier
      - `url` (text) - Link to publication
      - `citations` (integer, default 0) - Number of citations
      - `abstract` (text, default '') - Publication abstract
      - `keywords` (text[], default '{}') - Keywords/tags
      - `award` (text) - Award received (if any)
      - `last_synced` (timestamptz) - Last time data was synced from Google Scholar
      - `created_at` (timestamptz, default now()) - Record creation timestamp
      - `updated_at` (timestamptz, default now()) - Record update timestamp

  2. Security
    - Enable RLS on `publications` table
    - Add policy for public read access (publications are publicly viewable)
    - Add policy for authenticated insert/update for sync operations

  3. Indexes
    - Index on `year` for filtering by year
    - Index on `type` for filtering by publication type
    - Index on `citations` for sorting by citations
*/

CREATE TABLE IF NOT EXISTS publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text UNIQUE NOT NULL,
  authors text[] NOT NULL,
  venue text NOT NULL,
  year integer NOT NULL,
  type text NOT NULL CHECK (type IN ('journal', 'conference', 'workshop', 'book', 'preprint')),
  pages text,
  volume text,
  issue text,
  doi text,
  url text,
  citations integer DEFAULT 0,
  abstract text DEFAULT '',
  keywords text[] DEFAULT '{}',
  award text,
  last_synced timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Publications are viewable by everyone"
  ON publications
  FOR SELECT
  USING (true);

CREATE POLICY "Service role can insert publications"
  ON publications
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can update publications"
  ON publications
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_publications_year ON publications(year DESC);
CREATE INDEX IF NOT EXISTS idx_publications_type ON publications(type);
CREATE INDEX IF NOT EXISTS idx_publications_citations ON publications(citations DESC);
CREATE INDEX IF NOT EXISTS idx_publications_last_synced ON publications(last_synced DESC);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_publications_updated_at
  BEFORE UPDATE ON publications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
