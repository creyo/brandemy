<script>
    import facebook from "$lib/images/facebook.png";
    import twitter from "$lib/images/twitter.svg";
    import vimeo from "$lib/images/vimeo.svg";
    import youtube from "$lib/images/youtube.svg";
    import logo from "$lib/images/footer-logo.png";
</script>

<footer>
    <div class="container">
    <div class="footer-top flex">
        <div class="flex">    
        <p>About us</p>
        <p>Discover</p>
        <p>Contact us</p>
        <p>Books</p>            
        </div>
        <div class="social flex">
            <img src={facebook} alt="">
            <img src={twitter} alt="">
            <img src={vimeo} alt="">
            <img src={youtube} alt="">
        </div>
    </div>
    <div class="line"></div>
    <div class="footer-bottom flex">
        <p>All Rights Reserved.</p>
        <img src={logo} alt="">
        <div class="flex">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
        </div>
    </div>
</div>
</footer>