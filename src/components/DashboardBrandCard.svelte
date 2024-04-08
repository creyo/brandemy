<script>
// @ts-nocheck

    export let brand , selected_brand , change_selected_brand;
    import user from '$lib/images/user.png'
    import like from '$lib/images/thumbs-up.png'
    import comment from '$lib/images/comment.png'
    import { onMount } from 'svelte';
    let selected = false;
    let name = brand.brand_name;
    let logo = brand.logo;
    let domain_name = brand.domain_name;
    $: {
    selected = selected_brand === brand.id;
  }

    onMount(()=>{
        // console.log('selected',selected_brand)
        // console.log('brand',brand.id)
        if(selected_brand === brand.id){
            selected=true;
        }
    })

    const handleClick = () =>{
        if (selected) {
      change_selected_brand(null);
    } else {
      change_selected_brand(brand.id);
    }
    }

    // console.log(brand)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={`dashboard-brand-card ${selected ? 'selected-card' : ''}`}  on:click={handleClick}>
    <p class="brand-name">{name}</p>
    <!-- <div class="flex">
       
        <img src={user} alt="">
    </div> -->
    <div class="logo-div logo-div-jumji" >
        <img src={`/src/lib/images/${logo}`} alt="brand-img">
        <p>{domain_name}</p>
    </div>
    <div class="flex">
    <div class="flex">
        <img src={like} alt="">
        <p class="voted">5</p>
    </div>
    <div class="flex">
        <img src={comment} alt="">
        <p class="voted">5</p>
    </div>
</div>

    </div>