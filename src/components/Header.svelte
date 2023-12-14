<script>
  
    import logo from "$lib/images/logo-header.png";
    import logo2 from "$lib/images/footer-logo.png";
    import { page } from '$app/stores';
    /**
   * @type {boolean}
   */
    // let home;
    // $page.url.pathname === '/' ? home = true : home = false;

</script>
 
<div class="container">
<div class="home-nav">
    <img src={logo2} alt="" id="mobile-logo" width="174px" height="52px">
    <div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
        <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <img src={logo2} alt="" id="web-logo" width="174px" height="52px">
    <div class="nav-buttons">
        <button class="btn btn-light">
            Login
        </button>
        <button class="btn btn-dark">
            Register
        </button>
    </div>
</div></div> 