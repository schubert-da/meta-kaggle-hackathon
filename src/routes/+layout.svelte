<script>
	import Scrolly from '$lib/components/OpeningScrolly/Scrolly.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import '../styles/app.css';

	let { children } = $props();
</script>

<SEO></SEO>

<div class="scrolly-container">
	<Scrolly></Scrolly>
</div>

<main>
	{@render children()}
</main>

<style>
	.scrolly-container {
		width: 100%;
		padding: 0 calc(var(--page-padding) - 0.5rem);
	}
</style>
