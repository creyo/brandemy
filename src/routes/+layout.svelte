<script>
	import './styles.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';
	import { logged_in } from '$lib/store';
	onMount(() => {
    const unsubscribe = logged_in.subscribe(value => {
        // Do something with the new value, if needed
    });

    // Unsubscribe when the component is unmounted
    return unsubscribe;
});
</script>

<div class="app">
 
	<Header/>
	<main>
		<slot />
	</main>
	<Footer/>	
</div>