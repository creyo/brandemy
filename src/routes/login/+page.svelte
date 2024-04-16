<svelte:head>
    <title>Login | Brandemy</title>
</svelte:head>

<script>
// @ts-nocheck
  import { redirect } from "@sveltejs/kit";
  import google from '$lib/images/google.png';
    import facebook from '$lib/images/facebook-icon.png';
    import twitter from '$lib/images/twitter-icon.png';
    import { supabase } from "$lib/supabaseClient";
    import { goto } from '$app/navigation';
    import { logged_in , current_user } from "$lib/store";
  import { onMount } from "svelte";
  import Spinner from "../../components/Spinner.svelte";
  import MsgCard from "../../components/MsgCard.svelte";

  let email;
  let password;
  let google_token;
  let loading = true;
  let show_error = false;
  let waiting_for_response=false;

  let error_message_heading = '';
  let error_message = '';

  onMount(async()=>{
    let token = localStorage.getItem('Brandemy_Token')
    if($logged_in){
      // $logged_in = true
      goto('/dashboard')
    }
    loading= false;
    google_token=JSON.parse(localStorage.getItem('sb-vswslypjtkwyzainjgzn-auth-token'))
    
    if(google_token){
      loading = true;
      const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/signupwithgoogle'
      try{
        const res =  await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${google_token.access_token}`,
        },
    })
      const response = await res.json();
      if(response.status){
      
      localStorage.setItem("Brandemy_Token", response.token)
      localStorage.setItem('Brandemy_User', JSON.stringify(response.user));

      logged_in.set(true)
      // console.log(response.user)
      // current_user.set(response.user)
      loading = false
      goto('/dashboard');
    }
      }catch(error){
        console.error(error)
      }
    }
  })

  const  isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const show_warning= (heading,msg,time) =>{
  show_error= true ;
    setTimeout(() => {
    show_error= false;
  }, time);
  error_message_heading = heading
  error_message = msg
}

const submitForm = async(e) => {
  if(!password || !email){
    show_warning('WARNING!','Please fill properly',1000)
  return
  }
  if(!isValidEmail(email)){
    show_warning('WARNING!','Not a Valid Email',1000)
    return
  }
    const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/brandemy_login'
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    try{
      waiting_for_response = true
      const res =  await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await res.json();
   
    if(response.status){
      waiting_for_response = false
      localStorage.setItem("Brandemy_Token", response.token)
      localStorage.setItem('Brandemy_User', JSON.stringify(response.user));
      logged_in.set(true)
      goto('/dashboard');
    }
    }
   catch(error){
    console.error(error) 
    show_warning('Wrong Crendentials!','Invalid email or password',2000)
    password = '';
    waiting_for_response = false
   }
}
const handleGoogleAuth = async () => {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        console.error('Google login error:', error.message);
      } else {  
        // console.log('User:', user);
        // console.log('Session:', session);
      }
    } catch (error) {
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
{#if loading}
<Spinner/>
{:else}
<form on:submit|preventDefault={submitForm} class="login-register-form">
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" bind:value={email} on:keydown={handleKeyDown}>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" bind:value={password} on:keydown={handleKeyDown}>
    </div>
    {#if waiting_for_response}
    <button class="btn-dark btn-spinner">
      <Spinner/>
    </button>
    {:else}
    <button class="btn btn-dark">
       Login
    </button>
    {/if}
    <!-- <span class="social-icons">
        <img src={google} alt="">
        <img src={twitter} alt="">
        <img src={facebook} alt="">
    </span> -->
    <a  class="forgot-pass" href="/login/forget-password">Forgot Password?</a>
</form>   
<div class="google-auth">
  <h1>Login with Google</h1>    
  <button on:click={()=> handleGoogleAuth()}> <img src={google} alt=""></button> 
</div>
{/if}
</section>