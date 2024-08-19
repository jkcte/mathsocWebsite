import { title } from 'process';
import { SUPABASE_URL , SUPABASE_API_KEY } from '../.env';
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_API_KEY');

// Fetch data from the users table based on studentEmail and studentNumber
async function fetchUserData(studentEmail, studentNumber) {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('studentEmail', studentEmail)
            .eq('studentNumber', studentNumber);

        if (error) {
            throw new Error(error.message);
        }

        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

async function fetchComments(blogIDs) {
    try{
        const { data, error } = await supabase
            .from('comments')
            .select('*')
            .in('blogID', blogIDs)
            .order('created_At', { ascending: true });

        if(error){
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return null;
    }

}
// Set or get the current viewed blog
let currentBlog = {
    title: '',
    contents: '',
    userID: '',
    title: '',
    likers: [],
    Comments: [],
    tags: []
};

function setCurrentBlog(blog) {
    currentBlog = blog;
}

function getCurrentBlog() {
    return currentBlog;
}

export { fetchUserData };