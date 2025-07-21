<script>
	import SEO from '$lib/components/SEO.svelte';
	import '../styles/app.css';

	let { children } = $props();
</script>

<SEO></SEO>

<main>
	{@render children()}
</main>
