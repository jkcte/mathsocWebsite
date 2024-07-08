import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lceorzghswlakfunxtrf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

let email;
let password;

let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })
  