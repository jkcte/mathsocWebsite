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
        .eq('id', id)
        .select('*')
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
}

async function updateAnnouncement(id, content){
    const {result, error} = await supabase
        .from('announcement')
        .update(content)
        .eq('id', id)
        .select();
}


async function addLikers(id, likersID, currData){
    currData.push(likersID)
    const {error} = await supabase
        .from ('announcement')
        .update({
            likersID: currData
        })
        .eq('id', id)
        .select()
}

async function renderComments(announcementID){
    const { data, error} = await supabase
    .from('comments')
    .select('*')
    .match({
        referenceLocation: 'comments',
        referenceID: announcementID
    })
}