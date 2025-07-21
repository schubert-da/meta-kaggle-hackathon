<script>
	import Scroller from '@sveltejs/svelte-scroller';
	import ScrollyCard from './ScrollyCard.svelte';
	import ScrollyTrack from './ScrollyTrack.svelte';
	import ReasonsStep from './ReasonsStep.svelte';
	import { scrollySteps, stepHeights } from './ScrollySteps';

	let count;
	let index;
	let offset;
	let progress;
	let top = 0.1;
	let threshold = 0.6;
	let bottom = 1.5;

	$: scrollParams = { index, offset, progress };
</script>

<div class="scrolly-container">
	<Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
		<div slot="background">
			<div class="track-container">
				<ScrollyTrack {scrollParams}></ScrollyTrack>
			</div>
			<div class="card-container" class:centered={scrollParams?.index <= 1}>
				<ScrollyCard {scrollParams}></ScrollyCard>
			</div>
		</div>

		<div slot="foreground">
			{#each scrollySteps as step, index}
				<section
					class:large-step={step?.foregroundText || step?.empty}
					style:justify-content={index === 0 ? 'center' : 'center'}
					style:max-width={step?.foregroundText === 'manual' ? '1000px' : '800px'}
				>
					{#if step?.foregroundText}
						<div
							class="foreground-text"
							style:max-width={step?.foregroundText === 'manual' ? '1000px' : '800px'}
						>
							{#if step?.foregroundText === 'manual'}
								<ReasonsStep />
							{:else}
								<p>
									{@html step?.foregroundText}
								</p>
							{/if}
						</div>
					{:else}
						<div style:height={$stepHeights[index] + 'px'} class="foreground-text opacity-0">
							<p>{index} {step?.trackHeaderText || step?.trackLogText || ''}</p>
						</div>
					{/if}
				</section>
			{/each}
		</div>
	</Scroller>
</div>

<style lang="scss">
	.scrolly-container {
		position: relative;
		padding-bottom: 40vh;

		width: 100%;
	}

	[slot='background'] {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 2rem;

		width: 100%;
		max-width: 900px;
		margin: 0 auto;

		@media (max-width: 600px) {
			gap: 1rem;

			.track-container {
				width: 240px;
			}
			.track-container {
				width: 300px;
			}
		}

		.track-container {
			width: clamp(120px, 50%, 450px);
			height: 100%;
			z-index: 1000;
		}

		.card-container {
			width: clamp(250px, 50%, 300px);
			height: 100%;
			max-height: 450px;
			margin-top: 60px;
			z-index: 2000;
			transition: transform 0.5s ease-in-out;

			&.centered {
				position: fixed;
				left: 50%;

				transform: translate(-50%, 10%) scale(1.1);

				@media (max-width: 600px) {
					transform: translate(-50%, 0) scale(1.1);
				}
			}
		}
	}

	[slot='foreground'] {
		width: 100%;
		pointer-events: none;
		z-index: 3000;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: fit-content;
		color: #222;
		padding: 1em;
		margin: 0 auto;

		&.large-step {
			height: 70vh;
		}
	}

	.foreground-text {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		max-width: 500px;
		padding: 20px 24px;
		background-color: #fff;
		border: 1px solid #999;
		border-radius: 4px;
		box-shadow:
			rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	}
</style>
