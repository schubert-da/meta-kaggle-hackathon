<script>
	import CompetitionActivity from '../Milton/CompetitionActivity.svelte';
	import FirstCompetition from '../Milton/FirstCompetition.svelte';
	import Sources from '../Sources.svelte';
	import BodySection from './BodySection.svelte';
</script>

<BodySection
	title="Kaggle Competitions Don't Make You a Better Data Scientist"
	subtitle="... But that depends on how you define “competing”"
	chapter={1}
>
	<p>
		There is a widespread misconception that winning Kaggle competitions by itself will be enough to
		land you data science roles, and that higher leaderboard rankings directly correlates to how
		good of a data scientist one is. When looking at it from this lens I can see why people have
		this opinion.
	</p>

	<p>
		My opinion is that simply taking part in competitions and learning the basics of how to explore
		a dataset, clean and prepare your data, and iterate to figure out which model or technique works
		goes a long way in making you better at your craft.
	</p>

	<p>
		This is especially true when it comes to individuals that are new to the platform. Learning
		competitions are filled with example notebooks and discussions that help you grasp foundational
		concepts like python basics, data cleaning, linear regression, and more. In fact, when looking
		at the data we realise that the majority of first notebooks were written for 'Learning'
		competitions
	</p>

	<div class="chart-container">
		<FirstCompetition></FirstCompetition>
		<Sources>
			<div>
				<div class="sources mb-6 flex flex-col gap-1">
					<h3 class="text-lg">Sources</h3>
					<p>
						<span class="font-semibold">Dataset</span>: Meta Kaggle
					</p>
					<p>
						<span class="font-semibold">Files</span>: Kernels.csv, KernelVersions.csv,
						KernelVersionCompetitionSources.csv, Competitions.csv
					</p>
					<p>
						<span class="font-semibold">Link</span>:
						<a
							class="underline"
							href="https://www.kaggle.com/code/spitfire2nd/why-should-i-kaggle?scriptVersionId=251547825&cellId=6"
							target="_blank">Code link</a
						>
					</p>
				</div>
				<div class="methodology mb-8 flex flex-col gap-1">
					<h3 class="text-lg">Methodology</h3>
					<ol class="list-decimal pl-5">
						<li>
							<p class="mb-1">Filter kernels to remove entries with missing creation dates</p>
						</li>
						<li>
							<p class="mb-1">
								Identify each user's first kernel by finding the earliest creation date per
								AuthorUserId
							</p>
						</li>
						<li>
							<p class="mb-1">
								Link first kernels to their corresponding kernel versions and competition sources
							</p>
						</li>
						<li>
							<p class="mb-1">
								Merge with competition details to get titles, slugs, and host segment information
							</p>
						</li>
						<li>
							<p class="mb-1">
								Calculate competition popularity by counting frequency of each competition slug
							</p>
						</li>
						<li><p class="mb-1">Select top 300 most popular competitions for analysis</p></li>
						<li>
							<p class="mb-1">
								Create segment buckets by mapping host segments into broader categories (Learning,
								Competitive, Recruitment, etc.)
							</p>
						</li>
						<li>
							<p class="mb-1">
								Export results showing which competitions newcomers choose for their first Kaggle
								projects
							</p>
						</li>
					</ol>
				</div>
			</div>
		</Sources>
	</div>

	<p>
		Competitions are also where the community aspect of Kaggle is on full display. Competitors will
		often share starter notebooks and discussing potential solution approaches.
	</p>

	<div class="chart-container">
		<CompetitionActivity></CompetitionActivity>
		<Sources>
			<div>
				<div class="sources mb-6 flex flex-col gap-1">
					<h3 class="text-lg">Sources</h3>
					<p>
						<span class="font-semibold">Dataset</span>: Meta Kaggle
					</p>
					<p>
						<span class="font-semibold">Files</span>: Kernels.csv, KernelVersions.csv,
						KernelVersionCompetitionSources.csv, Competitions.csv, ForumTopics.csv
					</p>
					<p>
						<span class="font-semibold">Link</span>:
						<a
							href="https://www.kaggle.com/code/spitfire2nd/why-should-i-kaggle?scriptVersionId=251547825&cellId=8"
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
								Clean and filter kernels and competitions data, removing entries with missing dates
							</p>
						</li>
						<li>
							<p class="mb-1">
								Filter competitions to those lasting 2-16 weeks for meaningful weekly analysis
							</p>
						</li>
						<li>
							<p class="mb-1">
								Link kernels to competitions through kernel versions and competition sources
							</p>
						</li>
						<li>
							<p class="mb-1">
								Calculate weeks elapsed from competition start for each kernel creation
							</p>
						</li>
						<li>
							<p class="mb-1">
								Apply same linking and timing analysis to forum topics and forked notebooks
							</p>
						</li>
						<li>
							<p class="mb-1">
								Filter all activities to 0-20 week timeframe relative to competition start dates
							</p>
						</li>
					</ol>
				</div>
			</div></Sources
		>
	</div>

	<p>
		Ultimately, I feel like competitions are an invaluable tool to learn machine learning
		foundations and allow you to experiment with new domains and push the extents of your knowledge.
		That said, it is very easy to fall into the trap of chasing every shiny model or technique to
		snag a top leaderboard spot without fully understanding the “why?” behind it first.
	</p>

	<p>
		So my advice would be to enter competitions with the sole purpose of learning. If something
		feels like a grind, it's okay to take a step back and reassess whether it's still serving that
		purpose.
	</p>
</BodySection>
