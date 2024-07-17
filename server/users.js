import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lceorzghswlakfunxtrf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//read
function passData(data){
    
}

async function getUserInfo(email){
    
    let { data: users, error } = await supabase
    .from('users')
    .select('some_column,other_column');
    return data;
}

async function createAccount(data){
    const { data, error } = await supabase
        .from('users')
        .insert([
            { StudentNumber: data.studentNumber,
                date: data.date,
                studentEmail: data.StudentEmail,
                FirstName: data.firstName,
                LastName: data.lastName,
                UserName: data.userName,
                useRealName: false,
                likedPosts : 0,
                blogs: [],
                grievance: [],
                graduate: false,
                admittance: data.admittanceDate,
                birthday: data.birthDate,
                notification: {},
                taskID: [],
                picture: data.PictureLink,
                position: "onApproval"
            },
        ])
        .select()
}

async function selectAccount(email){
    const {result, error} = await supabase
        .from('users')
        .select('*')
        .eq('StudentNumber', email)
    return result
}

async function deleteAccount(email){
    passData(data);
    const {error} = await supabase
        .from('users')
        .delete()
        .eq('StudentNumber', email);
}

//Updates
async function updateUser(email, changes){
    const {result, error} = await supabase
        .from('users')
        .update(changes)
        .select('*')
        .eq('StudentNumber', email)
    return result;
}