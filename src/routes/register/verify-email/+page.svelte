<svelte:head>
    <title>Verify Email | Brandemy</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import Spinner from '../../../components/Spinner.svelte';
  
    let token;
  
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
//   console.log(token)
      // Make a POST request to the API endpoint with the token in the header
      fetch(`https://wisulbackend.netlify.app/.netlify/functions/index/register/verify-email?token=${token}`, {
        method: 'POST',
        headers: {          
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        // Add any request body if required
        // body: JSON.stringify({ key: 'value' }),
      })
        .then(response => {
          // Handle the response as needed
          if (response.ok) {
            console.log('Email verification successful');
            goto('/dashboard'); 
          } else {
            console.error('Email verification failed', response);
          }
        })
        .catch(error => {
          console.error('Error during email verification:', error);
        });
    });
  </script>


<Spinner/>