<script>
	import TechniquesTable from '../Charts/TechniquesTable.svelte';
	import TagsTable from '../Charts/TagsTable.svelte';
	import BodySection from './BodySection.svelte';
	import Sources from '../Sources.svelte';
</script>

<BodySection
	title="Problem statements are rarely representative of the real work"
	subtitle="... True, but there is no magical substitute for doing it on the job"
	chapter={3}
>
	<p>
		This deals with competition statements being unrealistic when compared to what individuals would
		work on on a day to day basis. Additionally, winning solutions are rarely able to generalise to
		real world data.
	</p>

	<p>
		What one considers as a “typical ML problem” differs from one person to another and with the
		ever-changing AI ML landscape the nature of the work has also changed dramatically in the last
		five years.
	</p>

	<div class="chart-container">
		<TechniquesTable></TechniquesTable>
		<Sources>
			<div>
				<div class="sources mb-6 flex flex-col gap-1">
					<h3 class="text-lg">Sources</h3>
					<p>
						<span class="font-semibold">Dataset</span>: Kaggle Survey 2022
					</p>
					<p>
						<span class="font-semibold">Files</span>: kaggle_survey_2022_responses.csv
					</p>
					<p>
						<span class="font-semibold">Link</span>:
						<a
							href="https://www.kaggle.com/code/spitfire2nd/why-should-i-kaggle?scriptVersionId=251547825&cellId=17"
							target="_blank"
							class="underline">Code link</a
						>
					</p>
				</div>
				<div class="methodology mb-8 flex flex-col gap-1">
					<h3 class="text-lg">Methodology</h3>
					<ol class="list-decimal pl-5">
						<li>
							<p class="mb-1">
								Filter survey responses to include only self-identified data scientists
							</p>
						</li>
						<li>
							<p class="mb-1">
								Extract all machine learning methods columns (Q18 series) from survey data
							</p>
						</li>
						<li>
							<p class="mb-1">
								Rename columns using the unique response values to create readable method names
							</p>
						</li>
						<li>
							<p class="mb-1">
								Calculate percentage of data scientists familiar with each ML technique
							</p>
						</li>
						<li>
							<p class="mb-1">
								Sort results by usage frequency and export findings for further analysis
							</p>
						</li>
					</ol>
				</div>
			</div>
		</Sources>
	</div>

	<p>
		There will never be a perfect substitute for on-the-job experience. Expect Kaggle competitions
		to be the magical resource that somehow teaches enthusiasts to be prepared for whatever domain
		or problem statement comes their way is unrealistic to say the least.
	</p>

	<p>
		Additionally a huge draw of Kaggle competitions is that you can work on problems that excite
		you. Personally I'd hate to come home and spend my free time doing the exact same thing I did at
		my 9-to-5.
	</p>

	<div class="chart-container">
		<TagsTable></TagsTable>
		<Sources
			><div>
				<div class="sources mb-6 flex flex-col gap-1">
					<h3 class="text-lg">Sources</h3>
					<p>
						<span class="font-semibold">Dataset</span>: Meta Kaggle
					</p>
					<p>
						<span class="font-semibold">Files</span>: CompetitionTags.csv, Tags.csv,
						Competitions.csv
					</p>
					<p>
						<span class="font-semibold">Link</span>:
						<a
							href="https://www.kaggle.com/code/spitfire2nd/why-should-i-kaggle?scriptVersionId=251547825&cellId=19"
							target="_blank"
							class="underline">Code link</a
						>
					</p>
				</div>
				<div class="methodology mb-8 flex flex-col gap-1">
					<h3 class="text-lg">Methodology</h3>
					<ol class="list-decimal pl-5">
						<li>
							<p class="mb-1">
								Define machine learning problem type buckets (tabular, computer vision, NLP, etc.)
							</p>
						</li>
						<li>
							<p class="mb-1">
								Create reverse mapping from individual tag names to broader problem categories
							</p>
						</li>
						<li>
							<p class="mb-1">Link competition tags to tag names and apply bucket categorization</p>
						</li>
						<li>
							<p class="mb-1">
								Merge with competition details and filter to valid years (2010-2025)
							</p>
						</li>
						<li>
							<p class="mb-1">
								Count frequency of each tag bucket and visualize most common competition types
							</p>
						</li>
					</ol>
				</div>
			</div>
		</Sources>
	</div>

	<p>
		As for Kaggle solutions not generalising to real life examples - there have been quite a few
		cases where Kaggle solutions have been put into production - NFL metrics, Airbus tracking
		systems, etc. so often this comes down equally to on the specifics of the winning solution and
		the design of the competition that it's tailored to.
	</p>
</BodySection>
