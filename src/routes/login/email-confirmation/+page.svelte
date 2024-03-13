<svelte:head>
    <title>Email Confirmation | Brandemy</title>
</svelte:head>

<script>
    import email from '$lib/images/email.png'
</script>

<div class="container">
    <section class="email-confirmation">
        <div class="email-confirmation-child">
            <img src={email} alt="">
            <h1>A Reset Password link is sent to your email please click the link. Thank You!</h1>
        </div>  
    </section>
</div>