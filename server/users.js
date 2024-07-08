import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lceorzghswlakfunxtrf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//read

async function getUserInfo(email){
    
    let { data: users, error } = await supabase
    .from('users')
    .select('some_column,other_column');
    return data;
}

async function createAccount(Object data){

}

