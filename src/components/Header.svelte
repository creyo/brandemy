<script>
  
    import logo from "$lib/images/logo-header.png";
    import logo2 from "$lib/images/footer-logo.png";
    import { page } from '$app/stores';
    /**
   * @type {boolean}
   */
    // let home;
    // $page.url.pathname === '/' ? home = true : home = false;
    
  let isChecked = false;

    // @ts-ignore
    const menuItemClicked = () => {
        console.log('clicked');
        isChecked = false;
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
        <button class="btn btn-light">
            <a href="/login">
            Login</a>
        </button>
        <button class="btn btn-dark">
            <a href="/register">
            Register</a>
        </button>
    </div>
</div></div> 