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

    let email;
  let password;
  let google_token;


  onMount(()=>{
    if($logged_in){
      goto('/dashboard')
    }
    
    google_token=localStorage.getItem('sb-vswslypjtkwyzainjgzn-auth-token')
    console.log(google_token.access_token)
  })

  const  isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const submitForm = async(e) => {
  if(!password || !email){
    return window.alert('Please fill properly')
  }
  if(!isValidEmail(email)){
    return window.alert("Not a Valid Email")
  }
    const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/brandemy_login'
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
      localStorage.setItem("Brandemy_Token", response.token)
      logged_in.set(true)
      console.log(response)
      current_user.set(response.user)
      goto('/dashboard');
    }
    }
   catch(error){
    console.log(error)
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
        console.log('User:', user);
        console.log('Session:', session);
      }
    } catch (error) {
      console.error('Google login error:', error.message);
    }
  };

</script>

<section class="container">
<form on:submit|preventDefault={submitForm} class="login-register-form">
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" bind:value={email}>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" bind:value={password}>
    </div>
    <button class="btn btn-dark">
       Login
    </button>
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
</section>