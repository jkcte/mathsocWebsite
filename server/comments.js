import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lceorzghswlakfunxtrf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function addComment(studentID, content, referenceLocation, referenceID){
    const {data, error} = await supabase
    .from('comments')
    .insert({
        studentID: studentID,
        content: content,
        referenceLocation: referenceLocation,
        referenceID: referenceID
    })
    .select('*')
}