import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Mock режимін тексеру
if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
  console.log('Mock режимінде жұмыс істейді')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
