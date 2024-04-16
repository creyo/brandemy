// @ts-nocheck
// page.server.js
import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */

  export async function load({ params }) {
    const ApiUrl = 'https://wisulbackend.netlify.app/.netlify/functions/index/brandemydata';

      // console.log('getBrandData');
      try {
        const res = await fetch(ApiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
  }})
  const data = await res.json();
 
      if (res.status !== 200) {
        console.error(`Error fetching data: ${res.status}`);
        return {
          status: res.status,
          error: new Error('Internal Server Error'),
        };
      }
     
      return {
        data,
      }
}
  catch (error) {
    console.error('Error fetching data:', error);
    return {
      status: 500,
      error: new Error('Internal Server Error'),
    }}
    
  }
  