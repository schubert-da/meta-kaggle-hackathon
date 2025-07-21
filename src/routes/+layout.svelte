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
		background-color: #ebd5b6;

		position: relative;
	}

	.scrolly-container::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 150px;
		pointer-events: none;
		background: linear-gradient(to bottom, transparent, #fff 100%);
	}
</style>
