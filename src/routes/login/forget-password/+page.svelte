<svelte:head>
    <title>Login | Brandemy</title>
</svelte:head>

<script>
// @ts-nocheck

  import google from '$lib/images/google.png';
    import { goto } from '$app/navigation';
  import MsgCard from '../../../components/MsgCard.svelte';

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
let email;
    const  isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const submitForm = async(e) => {
    if(!isValidEmail(email)){
        show_warning('WARNING!','Not a Valid Email',1000)
    return
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
        <label for="email">Enter your Email</label>
        <input type="text" name="email" id="" bind:value={email} on:keydown={handleKeyDown}>
    </div>
    <button class="btn btn-dark">
       Proceed
    </button>
 
</form>   
</section>