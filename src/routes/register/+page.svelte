<svelte:head>
    <title>Register | Brandemy</title>
</svelte:head>

<script>
 // @ts-ignore
const submitForm = async(e) => {
    e.preventDefault();
    const apiURL = 'https://wisulbackend.netlify.app/.netlify/functions/index/brandemy_register'
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
    form.reset();
}
</script>

<section class="container">
<form on:submit|preventDefault={submitForm} class="login-register-form">
    <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="">
    </div>
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="">
    </div>
    <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="">
    </div>
    <button class="btn btn-dark">
       Register
    </button>
</form>    
</section>