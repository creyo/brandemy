<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
	    import logo from "$lib/images/logo-header.png";
	    import hero from "$lib/images/home-hero.png";
	    import dubicon from "$lib/images/dubicon.png";
		import bozul from "$lib/images/bozul.png";
		import urmania from "$lib/images/urmania.png";
		import orango from "$lib/images/oragano.png";
		import teralin from "$lib/images/teralin.png";
		import huzzay from "$lib/images/huzay.png";
		import hajry from "$lib/images/hajry.png";
		import oyum from "$lib/images/oyum.png";
		import holuj from "$lib/images/holuj.png";
		import jumji from "$lib/images/jumji.png";
		import appsala from "$lib/images/appsala.png";
		import wisul from "$lib/images/wisul.png";
		import ecomyogi from "$lib/images/ecomyogi.png";
		import nehle from "$lib/images/nehle.png";
		import passiveday from "$lib/images/passiveday.png";
		import osnil from "$lib/images/osnil.png";
		import alifi from "$lib/images/alifi.png";
		import award from "$lib/images/award.png";
		import paper from "$lib/images/paper.png";

</script>

<div class="container home">

	<!-- <div class="home-nav">
		<img src={logo} alt="" id="mobile-logo" width="174px" height="52px">
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
		<img src={logo} alt="" id="web-logo" width="174px" height="52px">
		<div class="nav-buttons">
			<button class="btn btn-light">
				Login
			</button>
			<button class="btn btn-dark">
				Register
			</button>
		</div>
	</div> -->
    <div class="home-hero">
        <h1>Get the right brandname for your Million Dollar Business</h1>
        <p>Here is the Smarter, Faster way to name a <span>Product</span></p>
        <img src={hero} alt="">
    </div>

    <div class="home-heading-para">
        <h1>Get Premium Domain Names with Matching logo at discounted Price</h1>
        <p>We have painstakingly chosen a collection of premium brand names with most desired .com domain name</p>
    </div>

    <div class="icons-grid-div">
        <p class="home-heading">Curated Premium <span>Brandings</span> </p>
        <div class="icons-grid-bg">
            <div class="icons-grid">
                <img src={dubicon} alt="">
                <img src={bozul} alt="">
                <img src={urmania} alt="">
                <img src={orango} alt="">
                <img src={teralin} alt="">
                <img src={huzzay} alt="">
                <img src={hajry} alt="">
                <img src={oyum} alt="">
                <img src={holuj} alt="">
            </div>
       
        </div>
    </div>

 

    <div class="cards-grid-div cards-grid-div-1">
        <p class="home-heading">Check out on on our <span>Features</span></p>
        <div class="cards-grid">
            <div class="card">
                <p class="card-heading">Comprehensive Packages</p>
                <p class="card-para">Highlight your complete branding packages, 
                as this is a central offering that potential clients 
                are likely to be interested in</p>
            </div>
            <div class="card">
                <p class="card-heading">Comprehensive Packages</p>
                <p class="card-para">Highlight your complete branding packages, 
                as this is a central offering that potential clients 
                are likely to be interested in</p>
            </div>
            <div class="card">
                <p class="card-heading">Comprehensive Packages</p>
                <p class="card-para">Highlight your complete branding packages, 
                as this is a central offering that potential clients 
                are likely to be interested in</p>
            </div>
            <div class="card">
                <p class="card-heading">Comprehensive Packages</p>
                <p class="card-para">Highlight your complete branding packages, 
                as this is a central offering that potential clients 
                are likely to be interested in</p>
            </div>
        </div>
    </div>
    <div class="icons-grid-div icons-grid-div-2">
        <p class="home-heading">Few of our products incubated at <span><b> Brandemy</b></span> </p>
        <div class="icons-grid-2">
            <img src={jumji} alt="">
            <img src={appsala} alt="">
            <img src={wisul} alt="">
            <img src={ecomyogi} alt="">
            <img src={nehle} alt="">
            <img src={passiveday} alt="">
            <img src={osnil} alt="">
            <img src={alifi} alt="">
            </div>
    </div>
    
    <div class="cards-grid-div cards-grid-div-2">
        <p class="home-heading">Branding at its best!</p>
        <div class="cards-grid-2">
            <div class="card-2">
                <img src={award} alt="">
                <p class="card-heading">Recognitions</p>
                <p class="card-para">
                    Showcasing feedback from satisfied clients builds trust
                </p>
            </div>
            <div class="card-2">
                <img src={award}  alt="">
                <p class="card-heading">Recognitions</p>
                <p class="card-para">
                    Showcasing feedback from satisfied clients builds trust
                </p>
            </div>
            <div class="card-2">
                <img src={award} alt="">
                <p class="card-heading">Recognitions</p>
                <p class="card-para">
                    Showcasing feedback from satisfied clients builds trust
                </p>
            </div>
        </div>
    </div>
</div>

<div class="jumbotron">
    <div class="container">
        <div>
            <h1>Find the Perfect Brand Name Today</h1>
        <button class="btn">
            Get a Custom Name
        </button> 
        </div>
       <img src={paper}  alt="">
    </div>
</div>

