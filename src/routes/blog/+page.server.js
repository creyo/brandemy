import supabase from '../../config/supabase.js';
    
  export async function load()  {
        const {data} = await supabase
  			.from('articles')
              .select(`
            *,
            articlestatus(*),
            authors(*),
            categories(*),
            post_type(*),
            publication(*)
          `)
        return {
            props: {
                blogs: data ?? [],
            }
        }
    }
