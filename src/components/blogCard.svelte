<script>
// @ts-nocheck

    import image from '$lib/images/sample.png'
    /**
   * @type {{ authors: { name: any; }; }}
   */
     export let blog;
   let blogImage = blog.featured_image
  ? `https://res.cloudinary.com/creyo-com/image/upload/c_scale,w_375,h_215/v1698497773/brandemy/blog/${blog.featured_image}`
  : image;

// Function to check if an image is available
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

</script>
<a href="{blog.url}">
<div class="blog-card">
    <div class="flex">
        <p>Branding Strategies</p>
        <p>{blog.authors.name}</p>
    </div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
    src={blogImage}
    alt="Blog Featured Image"
  />

    <!-- <img src={`https://res.cloudinary.com/creyo-com/image/upload/c_scale,w_375,h_215/v1698497773/brandemy/blog/${blog.featured_image}`} alt=""> -->
    <h2>{blog.title}</h2>
    <p>{blog.seo_description}</p>
</div>
</a>
