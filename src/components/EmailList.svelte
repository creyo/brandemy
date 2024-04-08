<script>
// @ts-nocheck

    import x from '$lib/images/x-circle.png'
    export let email, delete_email;

    const handleClick = () => {
    delete_email(email);
  };
</script>


<div class="flex suggested-email">
    <p>{email}</p>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src={x} alt="" on:click={handleClick} style = "cursor: pointer"/>
</div>