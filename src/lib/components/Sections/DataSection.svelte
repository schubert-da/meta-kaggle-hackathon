<script>
	import BodySection from './BodySection.svelte';
	import TimeSpentChart from '../Milton/TimeSpentChart.svelte';
	import DatasetAccessesChart from '../Milton/DatasetAccessesChart.svelte';
	import Sources from '../Sources.svelte';
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
				<Sources>
					<div>
						<div class="sources mb-6 flex flex-col gap-1">
							<h3 class="text-lg">Sources</h3>
							<p>
								<span class="font-semibold">Dataset</span>: Anaconda State of Data Science Report
								2020
							</p>
							<p>
								<span class="font-semibold">Files</span>: Survey responses (manually extracted data)
							</p>
							<p>
								<span class="font-semibold">Link</span>:
								<a
									href="https://www.kaggle.com/code/spitfire2nd/why-should-i-kaggle?scriptVersionId=251547825&cellId=13"
									class="underline">Code link</a
								>
							</p>
						</div>
						<div class="methodology mb-8 flex flex-col gap-1">
							<h3 class="text-lg">Methodology</h3>
							<ol class="list-decimal pl-5">
								<li>
									<p class="mb-1">
										Extract time allocation data from Anaconda's 2020 survey question about ML
										workflow tasks
									</p>
								</li>
								<li>
									<p class="mb-1">
										Structure data into categories: loading, cleaning, visualization, model
										selection, training, and deployment
									</p>
								</li>
								<li>
									<p class="mb-1">
										Create percentage-based visualization showing relative time spent on each ML
										process step
									</p>
								</li>
								<li>
									<p class="mb-1">
										Display results as horizontal bar chart with subtitle explaining survey context
									</p>
								</li>
							</ol>
						</div>
					</div>
				</Sources>
			</div>

			<p>
				I do agree with this - we could do more on sourcing data although this wouldn’t lend itself
				to the competition format …
			</p>
		</li>
	</ol>

	<ol>
		<li>
			<strong class="mb-2 block">2. The data is too clean:</strong>
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
		than learning pandas on the five row datasets I started out with on w3schools.
	</p>

	<p>
		This is especially true when it comes to individuals that are new to the platform. Learning
		competitions are filled with example notebooks and discussions that help newcomers grasp
		foundational concepts like python basics, data cleaning, linear regression, etc.
	</p>

	<p>Even the dataset usage over the years has grown considerably:</p>

	<div class="chart-container">
		<DatasetAccessesChart />
		<Sources>
			<div>
				<div class="sources mb-6 flex flex-col gap-1">
					<h3 class="text-lg">Sources</h3>
					<p>
						<span class="font-semibold">Dataset</span>: Meta Kaggle
					</p>
					<p>
						<span class="font-semibold">Files</span>: KernelVersions.csv,
						KernelVersionDatasetSources.csv
					</p>
					<p>
						<span class="font-semibold">Link</span>:
						<a
							href="https://www.kaggle.com/code/spitfire2nd/why-should-i-kaggle?scriptVersionId=251547825&cellId=15"
							class="underline">Code link</a
						>
					</p>
				</div>
				<div class="methodology mb-8 flex flex-col gap-1">
					<h3 class="text-lg">Methodology</h3>
					<ol class="list-decimal pl-5">
						<li>
							<p class="mb-1">
								Identify latest version of each kernel by finding most recent creation date per
								ScriptId
							</p>
						</li>
						<li>
							<p class="mb-1">
								Count number of datasets used per kernel version from dataset sources table
							</p>
						</li>
						<li>
							<p class="mb-1">
								Merge kernel versions with dataset counts, filling missing values with zero
							</p>
						</li>
						<li>
							<p class="mb-1">Group by creation year and calculate total datasets used annually</p>
						</li>
						<li>
							<p class="mb-1">Visualize yearly trends showing increasing dataset usage over time</p>
						</li>
					</ol>
				</div>
			</div>
		</Sources>
	</div>
</BodySection>
