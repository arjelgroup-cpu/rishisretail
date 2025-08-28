import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id: string;
  phone_number: string;
  source: string;
  contacted: boolean;
  created_at: string;
}

export async function submitPhoneNumber(phoneNumber: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([{ phone_number: phoneNumber }]);

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return { success: false, error: 'This number is already registered for offers!' };
      }
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting phone number:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}