<script>
    // @ts-nocheck
    
        export let brand , selected_brand , change_selected_brand;
        // console.log(brand.brands.)
        import user from '$lib/images/user.png'
        import { onMount } from 'svelte';
        let selected = false;
        let name = brand.brands.brand_name;
        let logo = brand.brands.logo;
        let domain_name = brand.brands.domain_name;
        $: {
    selected = selected_brand === brand.brands.id;
  }
    
        onMount(()=>{                      
            // console.log('selected',selected_brand)
            // console.log('brand',brand.id)
            if(selected_brand === brand.brands.id){
                selected=true;
            }
        })
    
        const handleClick = () =>{
            if (selected) {
      change_selected_brand(null);
    } else {
      change_selected_brand(brand.brands.id);
    }
        }
    
        // console.log(brand)
    </script>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class={`dashboard-brand-card ${selected ? 'selected-card' : ''}`}  on:click={handleClick}>
        <div class="flex">
            <p class="brand-name">{name}</p>
            <img src={user} alt="">
        </div>
        <div class="logo-div logo-div-jumji" >
            <img src={`/src/lib/images/${logo}`} alt="brand-img">
            <p>{domain_name}</p>
        </div>    
        </div>