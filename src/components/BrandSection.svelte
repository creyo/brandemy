
<svelte:head>
    <title>{brandName} | Brandemy</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import Spinner from './Spinner.svelte';
//   import image from '$lib/images/sample.png'

export let data;
// console.log(datas)
let brandData = data;
let brandName = "";
let brandDomain = "";
let brandPrice = "";
let brandDesc = "";
let isLoading = true;

	onMount(async () => {
   if(brandData){
    brandName = brandData.brand_name
    brandDomain = brandData.domain_name
    brandPrice = brandData.price
    brandDesc = brandData.description
    isLoading = false;
   }
  })

  
</script>

{#if isLoading}
<Spinner/>
{:else}
{#if brandData}
<section class="container">
    <h1>{brandData.brand_name}</h1>
    <p>{brandData.domain_name}</p>
    <h3>{brandData.description}</h3>
    <p>{brandData.price}</p>
</section>
{:else}
  <p>Brand not found</p>
{/if}
{/if}
