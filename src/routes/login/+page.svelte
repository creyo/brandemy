<svelte:head>
    <title>Login | Brandemy</title>
</svelte:head>

<script>
  import { redirect } from "@sveltejs/kit";
  import google from '$lib/images/google.png';
    import facebook from '$lib/images/facebook-icon.png';
    import twitter from '$lib/images/twitter-icon.png';
    import { supabase } from "$lib/supabaseClient";
 // @ts-ignore
    // @ts-ignore
const submitForm = async(e) => {
    e.preventDefault();
    const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/brandemy_login'
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const res =  await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await res.json();
    console.log(response);
    // form.reset();
    window.location.href = '/dashboard';
    // @ts-ignore
    // throw redirect(201,'/dashboard');
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
        // localStorage.setItem('sb-czlpeqcpksfalvtmrulq-auth-token', data.user.access_token);
        console.log(data.user)
        // @ts-ignore
        // redirect("/", 200);
      }
    } catch (error) {
      // @ts-ignore
      console.error('Google login error:', error.message);
    }
  };

</script>

<section class="container">
<form on:submit|preventDefault={submitForm} class="login-register-form">
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="">
    </div>
    <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="">
    </div>
    <button class="btn btn-dark">
       Login
    </button>
    <span class="social-icons">
        <img src={google} alt="">
        <img src={twitter} alt="">
        <img src={facebook} alt="">
    </span>
    <p  class="forgot-pass">Forgot Password?</p>
</form>   

<button on:click={()=> handleGoogleAuth()}> <img src={google} alt=""></button> 
</section>