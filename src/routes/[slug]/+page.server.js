// @ts-nocheck
// page.server.js
import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { data, error } = await supabase
    .from('articles')
    .select(`
      *,
      articlestatus(*),
      authors(*),
      categories(*),
      post_type(*),
      publication(*)
    `)
    .eq('publication_id', 3)
    .eq('post_type', 2)
    .eq('status', 3)
    .eq('url', params.slug);
    

  if (error) {
    console.error(error);
    return {
      status: 500,
      error: new Error('Internal Server Error'),
    };
  }

  if (!data || data.length === 0) {
    return {
      status: 404,
      error: new Error('Blog post not found'),
    };
  }

  return {
    data: data[0], // Assuming you want to return only one blog post
  };
}

export const prerender = true;