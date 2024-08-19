import { createClient } from '@supabase/supabase-js';
import { userInfo } from 'os';
import { title } from 'process';
import { SUPABASE_URL , SUPABASE_API_KEY} from '.../.evn';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

// Function to send data to the blogs table
async function createBlog(title, userID, contents) {
    const { data, error } = await supabase
    .from('blogs')
    .insert([{ title, userID, contents }]);

  if (error) {
	console.error('Error inserting data:', error);
	return null;
  }

  return data;
}



export default sendDataToBlogsTable;