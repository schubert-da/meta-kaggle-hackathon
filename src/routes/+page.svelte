<script>
	import CompetingSection from '$lib/components/Sections/CompetingSection.svelte';
	import Conclusion from '$lib/components/Sections/Conclusion.svelte';
	import DataSection from '$lib/components/Sections/DataSection.svelte';
	import RelevanceSection from '$lib/components/Sections/RelevanceSection.svelte';
</script>

<div class="hero-section mb-8">
	<h1>Why Should I Kaggle</h1>
	<p>How Kaggle benefits the overall data science and ML community</p>
</div>

<div class="body-section">
	<CompetingSection></CompetingSection>
	<DataSection></DataSection>
	<RelevanceSection></RelevanceSection>
	<Conclusion></Conclusion>
</div>
