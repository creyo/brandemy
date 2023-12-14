
<svelte:head>
    <title>{title} | Brandemy</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import Spinner from '../../components/Spinner.svelte';

export let data;
let blog = data.data;
let body = "";
let title = "";
let authorName = "";
let date = "";
let image = '';
let isLoading = true;
	onMount(async () => {
   if(blog){
    body = blog.body
    title = blog.title
    authorName = blog.authors.name
    
    const timestamp =  blog.date
      const localDate = new Date(timestamp);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      // @ts-ignore
      date = localDate.toLocaleDateString('en-US', options);
    image = blog.featured_image
    isLoading = false;
   }
  })


</script>

{#if isLoading}
<Spinner/>
{:else}
{#if blog}
<section class="blog-hero blog-page-container">
    <div class="blog-hero-container">
        <h1>{title}</h1>
        <div class="flex web">
            <p>{authorName}</p>
            <p>{date}</p>
        </div>
        <div class="blog-image">
            <img src={`https://res.cloudinary.com/creyo-com/image/upload/v1698497773/brandemy/blog/${image}`}  alt="">
        </div>
        <div class="flex mob">
            <p>{authorName}</p>
            <p>{date}</p>
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
