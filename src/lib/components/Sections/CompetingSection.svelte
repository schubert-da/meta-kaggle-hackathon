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
		land you data science roles, and that higher leaderboard rankings correlates directly to how
		good of a data scientist an individual is. When looking at it from this lens I can see why
		people have this opinion.
	</p>

	<p>
		But my opinion is that simply taking part in competitions and learning the basics of how to
		explore a dataset, clean and prepare your data, and iterate to figure out which model or
		technique works goes a long way in making you better at your craft.
	</p>

	<p>
		This is especially true when it comes to individuals that are new to the platform. Learning
		competitions are filled with example notebooks and discussions that help newcomers grasp
		foundational concepts like python basics, data cleaning, linear regression, etc. When looking at
		the data, the majority of users' published notebooks seem to be created for various 'Getting
		Started' competitions.
	</p>

	<div class="chart-container">
		<FirstCompetition></FirstCompetition>
		<Sources></Sources>
	</div>

	<p>
		Competitions are also where the community aspect of Kaggle is on full display. Competitors will
		often come together sharing starter notebooks, discussing the problem statement, potential
		solution approaches, upvoting work they find interesting and much more.
	</p>

	<div class="chart-container">
		<CompetitionActivity></CompetitionActivity>
	</div>

	<p>
		Ultimately, I feel like competitions are an invaluable tool to learn machine learning
		foundations and allow you to experiment with new domains and push the extents of your knowledge.
		That said, it is very easy to fall into the trap of chasing every shiny model or technique to
		snag a top leaderboard spot without fully understanding the “why?” behind it first.
	</p>
</BodySection>
