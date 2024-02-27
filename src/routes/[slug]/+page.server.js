// @ts-nocheck
// page.server.js
import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//   const { data, error } = await supabase
//     .from('articles')
//     .select(`
//       *,
//       articlestatus(*),
//       authors(*),
//       categories(*),
//       post_type(*),
//       publication(*)
//     `)
//     .eq('publication_id', 3)
//     .eq('post_type', 2)
//     .eq('status', 3)
//     .eq('url', params.slug);
    

//   if (error) {
//     console.error(error);
//     return {
//       status: 500,
//       error: new Error('Internal Server Error'),
//     };
//   }

//   if (!data || data.length === 0) {
//     return {
//       status: 404,
//       error: new Error('Blog post not found'),
//     };
//   }

//   return {
//     data: data[0],
//   };
// }export async function load({ params }) {
  export async function load({ params }) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlTmFtZSI6IkJyYW5kZW15IiwidXNlcm5hbWUiOiJhbGlSYXphUXVlc2hpIiwicHVibGljYXRpb25faWQiOjMsImlhdCI6MTcwNzM3NDkwM30.OW9Oy7gl-t_TCfL8YQAlVCdxf7NGcFAF61gFwCtXwzk';
    const apiUrl = 'https://wisulbackend.netlify.app/.netlify/functions/index/getwisuldata';
  
    try {
      const res = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
  
      if (res.status !== 200) {
        console.error(`Error fetching data: ${res.status}`);
        return {
          status: res.status,
          error: new Error('Internal Server Error'),
        };
      }
  
      const article = data.data.filter(item => item.url === params.slug)[0];
  
      if (!article) {
        return {
          status: 404,
          error: new Error('Blog post not found'),
        };
      }
  
      return {
        data: article,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        status: 500,
        error: new Error('Internal Server Error'),
      };
    }
  }
  