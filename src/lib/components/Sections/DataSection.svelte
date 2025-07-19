<script>
	import BodySection from './BodySection.svelte';
	import TimeSpentChart from '../Milton/TimeSpentChart.svelte';
	import DatasetAccessesChart from '../Milton/DatasetAccessesChart.svelte';
</script>

<BodySection
	title="Data is simply handed to you"
	subtitle="... It's far from perfect, but it is a pretty good starting point"
	chapter={2}
>
	<p>This piece of criticism often comes in two forms:</p>

	<ol class="mb-6">
		<li>
			<strong class="mb-4 block">1. There is no data collection process:</strong>
			<p>
				While there have been competitions in the past that have allowed external data, for the most
				part you have the dataset provided - you never have to ask yourself what data would be
				useful and how do I go about collecting it and the challenges that would entail.
			</p>

			<div class="chart-container">
				<TimeSpentChart />
			</div>

			<p>
				I do agree with this - we could do more on sourcing data although this wouldn’t lend itself
				to the competition format …
			</p>
		</li>
	</ol>

	<ol>
		<li>
			<strong class="mb-2 block">2. There is no data collection process:</strong>
			<p>
				I understand where they're coming from but “too clean” is relative. Just about every
				competition involves a fair bit of cleaning and data prep to start so saying that they're
				all too clean is a gross exaggeration.
			</p>
			<br />
			<p>
				For example, the dataset behind this analysis is ~42 GB in size split across 41 different
				files to be joined on specific id cols for which documentation has been less than stellar,
				in addition to data which is missing, and more.
			</p>
		</li>
	</ol>

	<p>
		That said, Kaggle's datasets do serve as a great middle ground for learning data prep - It’s
		less complex than data that you might encounter as a data professional but it is miles better
		than learning pandas on the five row mock datasets I started out with on w3schools.
	</p>

	<p>
		This is especially true when it comes to individuals that are new to the platform. Learning
		competitions are filled with example notebooks and discussions that help newcomers grasp
		foundational concepts like python basics, data cleaning, linear regression, etc. When looking at
		the data, the majority of users' published notebooks seem to be created for various 'Getting
		Started' competitions.
	</p>

	<p>Even the dataset usage over the years has grown considerably:</p>

	<div class="chart-container">
		<DatasetAccessesChart />
	</div>
</BodySection>
