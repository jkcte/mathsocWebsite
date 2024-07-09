import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lceorzghswlakfunxtrf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//Login via Email

let { data, error } = await supabase.auth.signInWithOtp({
    email: 'someone@email.com'
  })

//Get user data
const { data: { user } } = await supabase.auth.getUser()

