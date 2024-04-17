<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import user from '$lib/images/user.png'
      export let data;
      let brand_list;

      onMount(()=>{
        brand_list = data.data.msg
        console.log(brand_list)
      })

</script>
<div class="container brands-page">
    
<div class="brands-grid">

{#if brand_list} 
{#each brand_list as brand}
<a href="brands{brand.url}">
<div class='brands-brand-card'>
    <div class="flex">
        <p class="brand-name">{brand.brand_name}</p>
        <img src={user} alt="">
    </div>
    <div class="logo-div logo-div-jumji" >
        <img src={`/src/lib/images/${brand.logo}`} alt="brand-img">
        <p>{brand.domain_name}</p>
    </div>    
    </div>
</a>
    {/each}
    {/if}

</div>
</div>