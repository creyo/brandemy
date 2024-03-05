<!-- 
<svelte:head>
    <title>{title} | Brandemy</title>
</svelte:head> -->

<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import Spinner from '../../components/Spinner.svelte';
  import image from '$lib/images/sample.png'
  import { page } from '$app/stores';
  import BlogPost from '../../components/BlogPost.svelte';
  import BrandSection from '../../components/BrandSection.svelte';

  export let data;
 
  let pageData = data.data;
  // console.log(pageData.post_type.type_name);

  // @ts-ignore
  /**
   * @type {typeof BlogPost}
   */
  let componentToRender;

  onMount(async () => {
    if (pageData && pageData.post_type && pageData.post_type.type_name === 'Blog') { 
      // Set the component to render
      // @ts-ignore
      componentToRender = "BlogPost";
    }
    // console.log(pageData);
  });

</script>

{#if componentToRender === "BlogPost"}
 <BlogPost data={pageData} />
 {:else}
 <BrandSection data={pageData} />
{/if}
