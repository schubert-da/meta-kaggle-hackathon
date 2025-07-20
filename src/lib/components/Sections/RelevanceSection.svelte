<script>
	import TechniquesTable from '../Charts/TechniquesTable.svelte';
	import TagsTable from '../Charts/TagsTable.svelte';
	import BodySection from './BodySection.svelte';
</script>

<BodySection
	title="Problem statements are rarely representative of the real work"
	subtitle="... True, but there is no magical substitute for doing it on the job"
	chapter={3}
>
	<p>
		This deals with the competition statements being unrealistic when compared to what individuals
		would work on on a day to day basis. Additionally, winning solutions are rarely able to
		generalise to real world data.
	</p>

	<p>
		Personally I feel like what one considers as a “typical ML problem” differs from one person to
		another and with the ever-changing AI ML landscape the nature of the work has also changed
		dramatically in the last five years.
	</p>

	<div class="chart-container">
		<TechniquesTable></TechniquesTable>
	</div>

	<p>
		There will never be a perfect substitute for on-the-job experience, so to expect Kaggle
		competitions to be the magical resource that somehow teaches enthusiasts to be prepared for
		whatever domain or problem statement comes their way is unrealistic to say the least.
	</p>

	<p>
		Additionally a huge draw of Kaggle competitions is that you can work on problems that excite
		you. Personally I’d hate to come home and spend my free time doing the exact same thing I did at
		my 9-to-5.
	</p>

	<div class="chart-container">
		<TagsTable></TagsTable>
	</div>

	<p>
		As for Kaggle solutions not generalising to real life examples - there have been quite a few
		cases where Kaggle solutions have been put into production - NFL metrics, Airbus tracking
		systems, etc. so often this comes down equally to on the specifics of the notebook and the
		design of the competition that it's tailored to.
	</p>
</BodySection>
