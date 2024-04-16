<svelte:head>
<title>Voting</title>
</svelte:head>


<script>
// @ts-nocheck

    import corneredLogo from '$lib/images/cornered-logo.png'
    import jumji from '$lib/images/jumji.png'
    import appsala from '$lib/images/appsala.png'
    import holuj from '$lib/images/holuj.png'
    import passiveday from '$lib/images/passiveday.png'
    import { onMount } from 'svelte';
  import VotingBrandCard from '../../../components/VotingBrandCard.svelte';
  import MsgCard from '../../../components/MsgCard.svelte';
  import { goto } from '$app/navigation';
    export let data;
    let error_message_heading = '';
  let error_message = '';
  let show_error = false;
    let user_brands;
    let email;
    let name;
    let comment;
    let selected_brand;
    onMount(()=>{
        user_brands = data.data.msg.favorites;
        selected_brand =   user_brands[0].brands.id
        
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
        email = urlParams.get('email');
    })

    const show_warning= (heading,msg,time) =>{
  show_error= true ;
    setTimeout(() => {
    show_error= false;
  }, time);
  error_message_heading = heading
  error_message = msg
  
}

    const change_selected_brand = (id) => {
    // Unselect previously selected brand
    if (selected_brand === id) {
        selected_brand = null; // Unselect the current brand if clicked again
    } else {
        selected_brand = id; // Select the newly clicked brand
    }
    console.log(selected_brand);
}


   
    const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/api/voting'
    const submitForm = async() =>{
    const data = {
    user_id: 31,
    voter_name: name,
    voter_email: email,
    comment: comment,
    brand_id: selected_brand
    }
        try{
      const res =  await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await res.json();
    console.log(data)
    console.log(response)
    
    show_warning('Dear Friend','Thank You for Voting',3000)
    setTimeout(() => {
        goto('/')
  }, 3000);
    }
    catch(error){
        console.log(error)
    }
}

const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          submitForm(); // Call the add_friend_email function when Enter key is pressed
        }
    };

</script>
<div class="voting-container">
    <div class="container voting-div">
        <div class="flex">
            <div class="voting-upper-div">
                <p class="voting-main-heading">You have recieved an invite from</p>
                <p class="voting-logo">Brandemy</p>
                <p class="voting-upper-div-para">You have been chosen by your friend to select a suitable brand for 
                him Choose a brand to vote and feel free to add your feedback for the same</p>
            </div>
            
            <img src={corneredLogo} alt="" class="cornered-logo">
        </div>
        
        <div class="candidate-brands">
            <p class="candidate-brands-heading">Vote from the options</p>
            <div class="brands-grid">
             
                {#if user_brands} 
                {#each user_brands as brand}
                    <VotingBrandCard {brand} selected_brand={selected_brand} change_selected_brand = {(id)=>change_selected_brand(id)}/>
                    {/each}
                    {/if}
            </div>
            <div class="voting-comment-div">
                <p class="candidate-brands-heading">Add you comments</p>
                <form on:submit|preventDefault={submitForm}>
                <textarea name="" id="" cols="30" rows="10" bind:value={comment} ></textarea>
                <div class="flex">
                    <input type="text" name="" id="name" placeholder="Enter Name" bind:value={name}>
                    <input type="email" name="" id="email" placeholder="Enter Email" bind:value={email} on:keydown={handleKeyDown}>
                    <button class="btn">Vote</button>
                </div>
            </form>
            </div>

            {#if show_error}
            <MsgCard heading={error_message_heading} msg={error_message} card_class = 'msg-card positive-msg'/>
            {/if}

            <div class="voting-lower-div flex">
                <div class="voting-lower-div-left">
                    <p class="voting-lower-div-heading">Sign up with us and win a free Brandname with a domain</p>
                    <p class="voting-lower-div-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, illo!</p>
                    <button class="btn">
                        <a href="/register">SignUp
                        </a>
                        </button>
                </div>
                <div class="voting-lower-div-right">
                    <div class="first-image">
                        <img src={appsala} alt="">
                    </div>
                 <div class="second-image">
                    <img src={holuj} alt="" >
                 </div>
                 <div class="third-image">
                    <img src={passiveday} alt="">
                 </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>