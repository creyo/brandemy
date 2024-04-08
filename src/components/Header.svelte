<script>
    import logo2 from "$lib/images/footer-logo.png";
    import { logged_in, current_user } from "$lib/store";
    import { goto } from "$app/navigation";
  import { onMount } from "svelte";
    
    let isChecked = false;
    let token ;

    onMount(()=>{
        token = localStorage.getItem('Brandemy_Token')
        if(token){
            logged_in.set(true)
        }
    })
    

    const menuItemClicked = () => {
        isChecked = false;
    }    

    const handleLogout = () =>{
        logged_in.set(false)
        current_user.set({})
        localStorage.removeItem('Brandemy_Token')
        localStorage.removeItem('sb-vswslypjtkwyzainjgzn-auth-token')
        goto('/')
    }

</script>
 
<div class="container">
<div class="home-nav">
      <a href="/" id="mobile-logo">
    <img src={logo2} alt=""  width="174px" height="52px"></a>
    <div>
        <input id="menu-toggle" type="checkbox" bind:checked={isChecked} on:click={menuItemClicked}/>
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
        <ul class="menu">
            <li><a href="/" on:click={menuItemClicked}>Home</a></li>
            <li><a href="/blog" on:click={menuItemClicked}>Blog</a></li>
        </ul>
    </div>
    <a href="/"><img src={logo2} alt="" id="web-logo" width="174px" height="52px"> </a> 
        <div class="nav-buttons">
        {#if $logged_in}
        <button class="btn btn-dark" on:click={handleLogout}>
            Logout
        </button>
        <a href="/dashboard">
        <button class="btn btn-light">Dashboard</button></a>
        {:else}
        <a href="/login">
        <button class="btn btn-light">Login</button></a>
        <a href="/register"> <button class="btn btn-dark">Register</button></a>
        {/if}
       
    </div>
</div></div> 