<svelte:head>
    <title>Login | Brandemy</title>
</svelte:head>

<script>
// @ts-nocheck

  // @ts-ignore
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte'
    // @ts-ignore
    let token;
    let password;
    let confirmPassword;
  let error_message_heading = '';
  let error_message = '';
  let show_error = false;
  import MsgCard from "../../../components/MsgCard.svelte";
    onMount(() => {
      // Extract the token from the URL
      const urlParams = new URLSearchParams(window.location.search);
      token = urlParams.get('token');
  
      // You can use the extracted token as needed, for example, send it to the server for verification
      if (!token) {
        // If the token is not present, you might want to redirect or handle the error accordingly
        console.error('Token not found in the URL');
        goto('/error'); // Redirect to an error page
      }
    })

    const show_warning= (heading,msg,time) =>{
  show_error= true ;
    setTimeout(() => {
    show_error= false;
  }, time);
  error_message_heading = heading
  error_message = msg
}
 // @ts-ignore
    // @ts-ignore
    const submitForm = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      
    show_warning('WARNING!','Passwords do not match',1000)
      return;
    }

    const apiURL = `https://wisulbackend.netlify.app/.netlify/functions/index/login/reset-password?token=${token}`;
    const data = { password }; // Use an object directly, no need for FormData
console.log(data)
    try {
      const res = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const response = await res.json();
    //   console.log(response);
      if (response.message == "Password reset successful.") {
        console.log(response);
        goto('/login');
      } else {
        console.error('Password reset failed:', response.error);
        // Handle failure appropriately
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle errors such as network issues
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
  <MsgCard heading={error_message_heading} msg={error_message} card_class = "msg-card negative-msg"/>
  {/if}
<form on:submit|preventDefault={submitForm} class="login-register-form">
    <div>
        <label for="password">Enter New Password</label>
        <input type="password" name="password" bind:value={password} on:keydown={handleKeyDown}>
    </div>
    <div>
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="password" bind:value={confirmPassword} on:keydown={handleKeyDown}>
    </div> 
    <button class="btn btn-dark">
       Confirm
    </button>
 
</form>   
</section>