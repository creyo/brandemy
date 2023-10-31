<svelte:head>
    <title>Brandemy | Blog</title>
</svelte:head>

<script>
     import blogImage from '$lib/images/blog-image.png'
     import logo from '$lib/images/logo.png'
     import { page } from '$app/stores';
    import supabase from '../../config/supabase.js';
    import { onMount } from 'svelte';
  import Spinner from '../../components/Spinner.svelte';

  /**
   * @type {string}
   */
let slug;
  /**
   * @type {any[]}
   */
let article = [];
let body = "";
let title = "";
let authorName = "";
let image = '';
let Date = "";
let isLoading = true;
	onMount(async () => {
    // Access the slug parameter from the route
    slug = $page.params.slug;
    // console.log(slug);

    	
	let { data, error } = await supabase
    .from('articles')
              .select(`
            *,
            articlestatus(*),
            authors(*),
            categories(*),
            post_type(*),
            publication(*)
          `).eq('publication_id', 3).eq('post_type', 2)
if (error) {
			console.log(error);
		} else {
            // @ts-ignore
            article = data.filter(blog=>blog.url == slug);
            
			// @ts-ignore
			body = article[0].body
      // @ts-ignore
      title = article[0].title
      // @ts-ignore
      authorName = article[0].authors.name
      // @ts-ignore
      Date = article[0].date
       // @ts-ignore
       image = article[0].featured_image
		}
        isLoading = false;
  })

</script>
{#if isLoading}
<!-- Display a loader while data is loading -->
<Spinner/>
{:else}
{#if article[0]}
<section class="blog-hero">
    <div class="blog-hero-container container">
        <h1>{title}</h1>
        <div class="flex">
            <p>{authorName}</p>
            <p>{Date}</p>
        </div>
        <div class="blog-image">
            <img src={`https://res.cloudinary.com/creyo-com/image/upload/v1698497773/brandemy/blog/${image}`}  alt="">
        </div>
    </div>
</section>
<div class="content">
    {@html body}
</div>
{:else}
  <p>Blog post not found</p>
{/if}
{/if}
