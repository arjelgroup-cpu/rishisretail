import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://weskzykzhivxgtvobmzq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlc2t6eWt6aGl2eGd0dm9ibXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MTg2ODksImV4cCI6MjA3MTk5NDY4OX0.oYKZS1chzWXNKZt5WQzEzL9ZqwT3R_htG3VU73HkjJI';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false
  }
});

export interface Lead {
  id: string;
  phone_number: string;
  source: string;
  contacted: boolean;
  created_at: string;
}

export async function submitPhoneNumber(phoneNumber: string): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('🚀 Submitting phone number:', phoneNumber);
    
    const { data, error } = await supabase
      .from('leads')
      .insert({ phone_number: phoneNumber })
      .select();

    if (error) {
      console.error('❌ Supabase error:', error);
      if (error.code === '23505') { // Unique constraint violation
        return { success: false, error: 'This number is already registered for offers!' };
      }
      return { success: false, error: error.message };
    }

    console.log('✅ Phone number saved successfully:', data);
    return { success: true };
  } catch (error) {
    console.error('❌ Error:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}

