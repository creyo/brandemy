<svelte:head>
    <title>Login | Brandemy</title>
</svelte:head>

<script>
// @ts-nocheck

  import google from '$lib/images/google.png';
    import { goto } from '$app/navigation';
    let email;

    const  isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const submitForm = async(e) => {
    if(!isValidEmail(email)){
    return window.alert("Not a Valid Email")
  }
    const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/forgetpassword'
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
      console.log(response);
      goto('/login/email-confirmation');
    }
    console.log(response)
    } catch(error){
        console.log(error)
    }
   
}

</script>

<section class="container">
<form on:submit|preventDefault={submitForm} class="login-register-form">
    <div>
        <label for="email">Enter your Email</label>
        <input type="text" name="email" id="" bind:value={email}>
    </div>
    <button class="btn btn-dark">
       Proceed
    </button>
 
</form>   
</section>