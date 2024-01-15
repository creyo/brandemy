import { supabase } from "$lib/supabaseClient";
/** @type {import('./$types').PageServerLoad} */
//   export async function load()  {
//         const {data}= await supabase
//   			.from('articles')
//               .select(`
//             *,
//             articlestatus(*),
//             authors(*),
//             categories(*),
//             post_type(*),
//             publication(*)
//           `).eq('publication_id', 3).eq('post_type', 2).eq('status', 3)
//         return { 
//                 data,
//         }
//     }

export async function load() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlTmFtZSI6IkJyYW5kZW15IiwidXNlcm5hbWUiOiJhbGlSYXphUXVlc2hpIiwicHVibGljYXRpb25faWQiOjMsImlhdCI6MTcwNTMwMzE2OH0.Ofd4j8iWYATg5tcNLflw2d8Su8DyfyFPZzEvgDHuHXo';
  const apiUrl = 'https://wisulbackend.netlify.app/.netlify/functions/index/getwisuldata';

  try {
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await res.json(); // Corrected: await the json() method

    // console.log(data);
    return {
      data,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You might want to handle the error appropriately in your application
  }
}
