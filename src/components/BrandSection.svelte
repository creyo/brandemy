
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
  <div class="brand-section flex">

    <div class='brands-brand-card'>
      <div class="flex">
          <p class="brand-name">{brandData.brand_name}</p>
          <!-- <img src={user} alt=""> -->
          <div class="flex">
            <p>Buy Now: </p>
            <p>{brandData.price}</p>
          </div>
      </div>
      <div class="logo-div logo-div-jumji" >
          <img src={`/src/lib/images/${brandData.logo}`} alt="brand-img">
          <p>{brandData.domain_name}</p>
      </div>    
      </div>
      <div>
        {brandData.description}
        <div>
          <button class="btn btn-dark">
            <a href={brandData.buy_now} target="_blank">
            Checkout
          </a>
          </button>
          <button class="btn btn-light">
            Inquire
          </button>
        </div>
      </div>
</div>
</section>
{:else}
  <p>Brand not found</p>
{/if}
{/if}
