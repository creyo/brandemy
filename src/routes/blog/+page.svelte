<svelte:head>
    <title>Brandemy | Blogs</title>
</svelte:head>
<script>
// @ts-nocheck
import Spinner from '../../components/Spinner.svelte';
import BlogCard from '../../components/blogCard.svelte';
import cardImg from '$lib/images/blog-hero.png';
import { onMount } from 'svelte';
/** @type {import('./$types').PageData} */
export let data; 
let currentPopulation = 12
let featured = data.data.data.filter(item => item.tag === 'featured')
let  blogs = data.data.data.slice(0, currentPopulation);
let isLoading = true;

const handlePopulation = () => {
    currentPopulation += 12;
    blogs = data.data.data.slice(0, currentPopulation);
}


    onMount(async () => {
		if (blogs) {
            isLoading = false;
		}
	});

</script>

<section class="blogs-hero blog-page-container ">
    <div class="blogs-hero-container ">
        <!-- <div class="hero-text">
            <h1>Brandemy</h1>
            <h3>Your Brand, Instantly Owned</h3>
        </div>
        <div class="hero-para">        
        <p>one-stop brand identity solution, offers short and memorable brand names,
        complete with domain names, logos, and stationery design. Say goodbye to months of
         searching and hello to owning your brand name in minutes with our seamless services.</p>
        </div> -->

        <div class="featured-blog">
            <a href= {featured[0].url} >
            <h3>{featured[0].title}</h3>
            <img  src={`https://res.cloudinary.com/creyo-com/image/upload/c_scale,w_375,h_215/v1698497773/brandemy/blog/${featured[0].featured_image}`} alt=""
           
            >
            <p>{featured[0].seo_description}</p>
        </a>
        </div>

        <div class="featured-blog-list mob-none">
            <h3>Featured Posts</h3>
            <ul>
                {#each featured as blog}
                <li><a href={blog.url}>{blog.title}</a></li>
                {/each}
            </ul>
        </div>
    </div>
</section>

<div class="container">
    
    <div class="featured-blog-list web-none">
        <h3>Featured Posts</h3>
        <ul>
            {#each featured as blog}
            <li><a href={blog.url}>{blog.title}</a></li>
            {/each}
        </ul>
    </div>
</div>
<div class="container blogs-heading">
    <h3>Blog Posts from Brandemy</h3>
    <div class="line"></div>
</div>
<div class="blogs-grid container">
    {#if isLoading}
<Spinner/>
{:else}
    {#each blogs as blog}
    <BlogCard {blog} />
    {/each}
{/if}
</div>
<div class="button-div" >
    <button class="btn btn-light" style="color: white;" on:click={handlePopulation}>
        More
    </button>
</div>

