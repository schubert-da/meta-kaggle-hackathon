<script>
	import { index } from 'd3';
	import { scrollySteps, createLineChartSVG } from './ScrollySteps';

	export let scrollParams;

	$: currentNotebooks = 0;
	$: currentTopics = 0;
	$: currentScore = [];
	$: currentDay = 0;

	$: chartWidth = 0;
	$: SVGCode = currentScore.length > 1 ? createLineChartSVG(currentScore, chartWidth, 60, 4) : '';

	$: if (scrollParams?.index) {
		if (scrollySteps[scrollParams.index]?.notebooks) {
			currentNotebooks = scrollySteps[scrollParams.index]?.notebooks;
		}

		if (scrollySteps[scrollParams.index]?.topics) {
			currentTopics = scrollySteps[scrollParams.index]?.topics;
		}

		if (scrollySteps[scrollParams.index]?.day) {
			currentDay = scrollySteps[scrollParams.index]?.day;
		}

		if (scrollySteps[scrollParams.index]?.score) {
			currentScore = scrollySteps
				.slice(0, scrollParams.index + 1)
				.filter((s) => s?.score)
				.map((s) => s.score);
		}
	}
</script>

<div class="card" class:opacity-0={scrollParams.index >= scrollySteps.length - 2}>
	<div class="card-image border-b-[3px] border-[#444]">
		<img src="/images/comp-image.jpg" alt="Logo of a Kaggle competition posting" />
	</div>

	<div class="card-content">
		<h2 class="card-title">GeoCORP - Global Green Cover Detection 2025</h2>
		{#if scrollParams?.index < 4}
			<div class="card-desc">
				Analyze high-resolution satellite imagery to accurately classify and quantify vegetation
				coverage using computer vision techniques.
			</div>
		{:else}
			<div class="stats">
				{#if currentScore.length > 1}
					<div class="leaderboard" bind:clientWidth={chartWidth}>
						<span class="stat-title"
							>LEADERBOARD SCORE <span class="font-normal"
								>({currentScore[currentScore.length - 1]})</span
							></span
						>
						<div class="line-chart w-full">
							{@html SVGCode}
						</div>
					</div>
				{/if}

				<div class="bans">
					<div class="ban">
						<span class="stat-title">NOTEBOOKS</span>
						<span class="stat-value">{currentNotebooks}</span>
					</div>
					<div class="ban">
						<span class="stat-title">TOPICS</span>
						<span class="stat-value">{currentTopics}</span>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class="card-footer">
		<span class="prize"> $25,000 </span>
		<span class="deadline"> {92 - currentDay} days left </span>
	</div>
</div>

<style lang="scss">
	.card {
		--card-padding: 14px;

		overflow: hidden;

		background-color: #fff;
		border: 1px solid #666;
		border-radius: 6px;
		box-shadow:
			rgba(0, 0, 0, 0.19) 0px 10px 20px,
			rgba(0, 0, 0, 0.23) 0px 6px 6px;

		font-family: Roboto, sans-serif;
		color: #333;
		transition: opacity 1s ease-in-out;

		.card-content {
			padding: 20px var(--card-padding);
			border-bottom: 1px solid #666;

			h2.card-title {
				margin-bottom: 8px;

				font-family: Roboto, sans-serif;
				font-weight: 600;
				font-size: 22px;
				letter-spacing: -0.2px;
				line-height: 1.2;
			}

			.card-desc {
				font-size: 17px;
			}

			.stats {
				.stat-title {
					display: block;
					font-weight: 500;
					font-size: 18px;
					margin-bottom: 4px;
					color: #333333;
				}

				.leaderboard {
					margin-bottom: 16px;
				}

				.bans {
					display: flex;
					flex-direction: row;
					align-items: start;
					justify-content: space-between;
					gap: 16px;

					.ban {
						width: 50%;
						min-width: 50%;
						display: flex;
						flex-direction: column;

						.stat-title {
							margin-bottom: 0px;
						}

						.stat-value {
							font-weight: 400;
							font-size: 22px;
							color: #444444;
						}
					}
				}
			}
		}

		.card-footer {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: var(--card-padding);

			.prize {
				font-weight: 500;
			}
		}
	}
</style>
