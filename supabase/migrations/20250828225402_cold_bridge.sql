/*
  # Create leads table for phone number collection

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `phone_number` (text, unique)
      - `source` (text, default 'youtube_ad')
      - `created_at` (timestamp)
      - `contacted` (boolean, default false)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to manage leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,
  source text DEFAULT 'youtube_ad',
  contacted boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow service role to manage leads
CREATE POLICY "Service role can manage leads"
  ON leads
  FOR ALL
  TO service_role
  USING (true);