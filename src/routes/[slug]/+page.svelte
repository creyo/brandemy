
<svelte:head>
    <title>{title} | Brandemy</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import Spinner from '../../components/Spinner.svelte';
  import image from '$lib/images/sample.png'

export let data;
let blog = data.data;
let body = "";
let title = "";
let authorName = "";
let date = "";
let blogImage = '';
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
    blogImage = blog.featured_image
  ? `https://res.cloudinary.com/creyo-com/image/upload/c_scale,w_375,h_215/v1698497773/brandemy/blog/${blog.featured_image}`
  : image;
// @ts-ignore
async function isImageAvailable(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Check if the image is available
isImageAvailable(blogImage).then((available) => {
  if (available) {
    // Image is available, you can use it
    console.log("Image is available:", blogImage);
  } else {
    // Image is not available, use the default image or handle accordingly
    console.log("Image is not available, using default image");
    blogImage = image; // Use the default image
  }

  // Render the image
  // ...

  // Example: render the image in the component
  // <img src={blogImage} alt="Blog Featured Image" />
});
// Function to check if an image is available
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
          <img
          src={blogImage}
          alt="Blog Featured Image"
        />
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
