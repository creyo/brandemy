<svelte:head>
    <title>About Us | Brandemy</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import Spinner from '../../components/Spinner.svelte';
    import aboutUs from '$lib/images/about-us.png'

    export let data;
    let isLoading = true;
    let content = data.data;
    let body = "";

    onMount(async () => {
   if(content){
    body = content.body
    isLoading = false;
   }
  })
</script>
{#if isLoading}
<Spinner/>
{:else}
{#if content}
<div class="container">
<section class="about-us-hero">
    <div class="about-us-hero-child">
        <img src={aboutUs} alt="">
        <h1>About Us</h1>
    </div>  
</section>
</div>


<div class="about-us-content">
    {@html body}
</div>
{:else}
  <p>Page not found</p>
{/if}
{/if}