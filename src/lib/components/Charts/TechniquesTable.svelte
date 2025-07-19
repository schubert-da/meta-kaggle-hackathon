<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let data = [];

	onMount(async () => {
		try {
			data = await d3.csv('/data/ml_methods_usage.csv');
		} catch (error) {
			console.error('Error loading CSV:', error);
		}
	});
</script>

{#if data}
	<div class="table-container">
		<div class="title-content">
			<h2>What is the Norm?</h2>
			<p>
				When asked about machine learning algorithms were used in their daily work, respondents from
				Kaggle's Machine Learning and Data Science Survey 2022 reported the following techniques.
				The percentages indicate the share of respondents who used each technique.
			</p>
		</div>

		<div class="techniques-table">
			<div class="title-row">
				<div class="grid-title">Method</div>
				<div class="grid-title">Percentage that used it</div>
			</div>
			{#each data as row}
				{@const smallValue = row.percentage * 100 < 25}
				{@const formattedPercentage = (row.percentage * 100).toFixed(1)}
				<div class="grid-row">
					<div class="grid-element">{row.method}</div>
					<div class="grid-element">
						<div class="bar-chart" style:--perc-value="{formattedPercentage}%">
							<div class="bar" style:--bar-width="{row.percentage * 100}%">
								{#if smallValue === false}
									<span class="value">{formattedPercentage}%</span>
								{/if}
							</div>

							{#if smallValue}
								<span class="value small-value">{formattedPercentage}%</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.title-content {
		margin-bottom: 16px;

		h2 {
			margin-bottom: 16px;
			line-height: 1.2;
		}
	}

	.techniques-table {
		display: grid;
		grid-template-columns: minmax(150px, 350px) minmax(150px, 350px);
		gap: 4px 20px;
		font-size: var(--font-size-0);

		.title-row {
			grid-column: 1 / span 2;
			display: flex;

			padding: 4px;
			border-bottom: 3px solid #444;

			.grid-title {
				width: 50%;
				font-size: var(--font-size-1);
				font-family: 'Playfair Display', serif;
				font-weight: 500;
				text-wrap: balance;
			}
		}

		.grid-row {
			grid-column: 1 / span 2;
			display: flex;

			padding-bottom: 4px;
			border-bottom: 1px solid #666;

			.grid-element {
				width: 50%;
				padding: 4px 4px;
			}
		}
	}

	.bar-chart {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 8px;

		width: 100%;
		height: 100%;
		background-color: #efefef;
		border-radius: 6px;
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: start;

		width: var(--bar-width, 0%);
		height: 100%;
		padding: 4px 12px;
		border-radius: 6px;
		background-color: var(--color-palette-maroon);

		font-size: var(--font-size-0);
	}

	span.value {
		padding: 6px 0;

		color: white;
		font-weight: 400;
		font-family: 'Roboto', sans-serif;

		&.small-value {
			color: #222;
			font-weight: 500;
		}
	}
</style>
