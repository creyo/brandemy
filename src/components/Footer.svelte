<script>
    import facebook from "$lib/images/facebook.png";
    import twitter from "$lib/images/twitter.svg";
    import youtube from "$lib/images/youtube.svg";
    import instagram from "$lib/images/instagram.png";
    import tiktok from "$lib/images/tiktok.png";
    import logo from "$lib/images/footer-logo.png";
</script>

<footer>
    <div class="container">
    <div class="footer-top flex">
        <div class="flex">    
        <a href="/about-us">About us</a>
        <a href="/about-us">Discover</a>
        <a href="/about-us">Contact us</a>
        </div>
        <div class="social flex">
            <a href="https://www.facebook.com/brandemy" target="_blank"><img src={facebook} alt="" height="24px" width="24px"></a>
            <a href="https://twitter.com/brandemy" target="_blank"><img src={twitter} alt="" height="24px" width="24px"></a>
            <a href="https://www.instagram.com/brandemycom" target="_blank"><img src={instagram} alt="" height="24px" width="24px"></a>
            <a href="https://www.youtube.com/@brandemycom" target="_blank"><img src={youtube} alt="" height="24px" width="24px"></a>
            <a href="/"><img src={tiktok} alt="" height="24px" width="24px"></a>
        </div>
    </div>
    <div class="line"></div>
    <div class="footer-bottom flex">
        <p>All Rights Reserved.</p>
        <img src={logo} alt=""  width="174px" height="52px">
        <div class="flex">
            <a href="/about-us">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
        </div>
    </div>
</div>
</footer>