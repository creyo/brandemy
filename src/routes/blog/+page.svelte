<svelte:head>
    <title>Brandemy | Blogs</title>
</svelte:head>


<script>
// @ts-nocheck

    import Spinner from '../../components/Spinner.svelte';
import BlogCard from '../../components/blogCard.svelte';
import supabase from '../../config/supabase.js';
    import { onMount } from 'svelte';
    /**
   * @type {any[]}
   */
    let blogs = [];
    let isLoading = true;
    onMount(async () => {
	let { data, error } = await supabase
  			.from('articles')
              .select(`
            *,
            articlestatus(*),
            authors(*),
            categories(*),
            post_type(*),
            publication(*)
          `).eq('publication_id', 3).eq('post_type', 2).eq('status', 3)

		if (error) {
			console.log(error);
		} else {
            // @ts-ignore
            let digital_products = data.filter(article=>article.post_type.type_name=="Blog")
			blogs = digital_products;
			console.log(blogs);
		}
        isLoading = false;
	});
</script>

<section class="blogs-hero">
    <div class="blogs-hero-container container">
        <div class="hero-text">
            <h1>Brandemy</h1>
            <h3>Your Brand, Instantly Owned</h3>
        </div>
        <div class="hero-para">        
        <p>one-stop brand identity solution, offers short and memorable brand names,
        complete with domain names, logos, and stationery design. Say goodbye to months of
         searching and hello to owning your brand name in minutes with our seamless services.</p>
        </div>
    </div>
</section>
<div class="container blogs-heading">
    <h3>Blog Posts from Brandemy</h3>
    <div class="line"></div>
</div>

<div class="blogs-grid container">
    {#if isLoading}
<!-- Display a loader while data is loading -->
<Spinner/>
{:else}
    {#each blogs as blog}
    <BlogCard {blog} />
    {/each}

{/if}
</div>

