
import { createClient } from '@supabase/supabase-js';

// Setup instructions:
// 1. Create a project at supabase.com
// 2. Add 'SUPABASE_URL' and 'SUPABASE_ANON_KEY' to your environment variables.
// 3. Create a table 'signups' with: name(text), email(text), company(text), industry(text), budget(text), need(text).

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const isConfigured = !!(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-project'));

// Initialize client only if we have real credentials
export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export const getSignupCount = async (): Promise<number> => {
  if (!supabase) {
    console.info("Using Simulation Mode: Connect Supabase for real data persistence.");
    return 3; 
  }

  try {
    const { count, error } = await supabase
      .from('signups')
      .select('*', { count: 'exact', head: true });
    
    if (error) throw error;
    return (count || 0) + 3;
  } catch (e) {
    console.warn("Database connection issue, using fallback count.");
    return 3;
  }
};

export const submitSignup = async (data: any) => {
  if (!supabase) {
    // Artificial delay to simulate network latency for better UX feel
    await new Promise(resolve => setTimeout(resolve, 1200));
    console.info("Mock submission successful:", data);
    return [data];
  }

  const { data: result, error } = await supabase
    .from('signups')
    .insert([data])
    .select();
  
  if (error) throw error;
  return result;
};
