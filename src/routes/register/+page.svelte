<svelte:head>
    <title>Register | Brandemy</title>
</svelte:head>

<script>
// @ts-nocheck

    import google from '$lib/images/google.png';
    import facebook from '$lib/images/facebook-icon.png';
    import twitter from '$lib/images/twitter-icon.png';
    import { supabase } from "$lib/supabaseClient";
    import { goto } from '$app/navigation';
    import { logged_in } from '$lib/store';
    import { onMount } from 'svelte';
  let msg;
  let name;
  let email;
  let password;
  import MsgCard from "../../components/MsgCard.svelte"; 
  let error_message_heading = '';
  let error_message = '';
  let show_error = false;
    const show_warning= (heading,msg,time) =>{
  show_error= true ;
    setTimeout(() => {
    show_error= false;
  }, time);
  error_message_heading = heading
  error_message = msg
}

  onMount(()=>{
    if($logged_in){
      goto('/dashboard')
    }

    
  })

  const  isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

 // @ts-ignore
const submitForm = async(e) => {

  if(!password || !name || !email){
    show_warning('WARNING!','Please fill properly',1000)
    return
  }
  if(!isValidEmail(email)){
    show_warning('WARNING!','Not a Valid Email',1000)
    return
  }
    // e.preventDefault();
    const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/brandemy_register'
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    try{
    const res =  await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await res.json();
    if(response.status){
      form.reset();
      goto('/register/email-confirmation');
      return console.log(response);
    }
    console.log(response)
    msg = response.msg
    show_warning('WARNING!',msg,1000)
    form.reset();
  }
  
  catch(error){
          console.error('Error during email verification:', error);
        };
  
}

const handleGoogleAuth = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        console.error('Google login error:', error.message);
      } else {
        // @ts-ignore
        localStorage.setItem('sb-czlpeqcpksfalvtmrulq-auth-token', data.user.access_token);
        console.log(data)
      }
    } catch (error) {
      // @ts-ignore
      console.error('Google login error:', error.message);
    }
  };

  const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          submitForm(); // Call the add_friend_email function when Enter key is pressed
        }
    };
</script>

<section class="container">
  {#if show_error}
  <MsgCard heading={error_message_heading} msg={error_message} card_class="msg-card negative-msg"/>
  {/if}
<form on:submit|preventDefault={submitForm} class="login-register-form">
    <div>
        <label for="name">Name</label>
        <input type="text" name="name"  bind:value={name} on:keydown={handleKeyDown}>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="text" name="email"  bind:value={email} on:keydown={handleKeyDown}>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password"  bind:value={password} on:keydown={handleKeyDown}>
    </div>
    <button class="btn btn-dark">
       Register
    </button>
    <!-- <span class="social-icons">
        <img src={twitter} alt="">
        <img src={facebook} alt="">
    </span> -->
</form>  
<div class="google-auth">
  <h1>Register with Google</h1>    
  <button on:click={()=> handleGoogleAuth()}> <img src={google} alt=""></button> 
</div>
</section>
