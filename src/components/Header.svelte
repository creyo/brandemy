<script>
    import logo from '../lib/images/logo.png';
    import { page } from '$app/stores';
    /**
   * @type {boolean}
   */
    let home;
    $page.url.pathname === '/' ? home = true : home = false;

</script>
{#if !home}
<div class="navbar">
    <img src={logo} alt="">
</div>
{/if}
