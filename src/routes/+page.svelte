<script>
	import Scrolly from '$lib/components/OpeningScrolly/Scrolly.svelte';
	import CompetingSection from '$lib/components/Sections/CompetingSection.svelte';
	import Conclusion from '$lib/components/Sections/Conclusion.svelte';
	import DataSection from '$lib/components/Sections/DataSection.svelte';
	import RelevanceSection from '$lib/components/Sections/RelevanceSection.svelte';
</script>

<div class="hero-section mb-12 max-w-[800px] pt-20">
	<h1 class="mb-4">So Where Does Kaggle Fit In?</h1>
	<div class="text-container">
		<p>Let's talk about some of these criticisms and maybe look at a bit of data along the way.</p>
	</div>
</div>

<div class="body-section">
	<CompetingSection></CompetingSection>
	<DataSection></DataSection>
	<RelevanceSection></RelevanceSection>
	<Conclusion></Conclusion>
</div>

<style lang="scss">
	.hero-section {
		margin-bottom: 90px;
		margin-top: 40px;

		h1 {
			font-size: var(--font-size-5);
			text-align: center;
			text-wrap: pretty;
		}

		p {
			font-size: calc(var(--font-size-0) + 2px);
			text-wrap: balance;
			text-align: center;
		}
	}
</style>
