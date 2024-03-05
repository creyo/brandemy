<svelte:head>
    <title>Login | Brandemy</title>
</svelte:head>

<script>
  import { redirect } from "@sveltejs/kit";

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
    <p  class="forgot-pass">Forgot Password?</p>
</form>    
</section>