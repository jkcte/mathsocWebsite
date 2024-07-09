import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lceorzghswlakfunxtrf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function readAllAnnouncements(){
    let {data: announcement, error} = await supabase
        .from('announcement')
        .select('*');
    return data
}

async function readAnnouncement(id){
    const {data, error} = await supabase
        .from('announcement')
        .select()
        .eq('id', id)
    return data
}

async function createAnnouncement(data){
    const {data, error} = await supabase
        .from('announcement')
        .insert([{
            title: data.title,
            subtitle: data.subTitle,
            content: data.content,
            likersID:[],
            comment: [{}],
            isPermitte: false
        }])
        .select();
    return data;
}

update