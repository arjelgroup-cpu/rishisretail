-- Create leads table for phone number collection
-- This migration creates the leads table and disables RLS for smooth operation

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,
  source text DEFAULT 'website',
  contacted boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Disable RLS for smooth operation without restrictions
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
