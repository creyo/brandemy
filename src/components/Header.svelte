<script>
    import logo from '../lib/images/footer-logo.png';
    import { page } from '$app/stores';
    /**
   * @type {boolean}
   */
    let home;
    $page.url.pathname === '/' ? home = true : home = false;

</script>
{#if !home}
<div class="navbar">
    <a href="/">
    <img src={logo} alt="" width="174px" height="52px">
</a>
</div>
{/if}
