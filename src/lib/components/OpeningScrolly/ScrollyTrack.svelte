<script>
	import { getScrollyTextIndex, scrollySteps, stepHeights } from './ScrollySteps';
	export let scrollParams;

	const filteredSteps = scrollySteps.filter((s) => s?.trackHeaderText || s?.trackLogText);

	$: trackHeight = null;
	$: scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div
	class="track"
	bind:clientHeight={trackHeight}
	style="transform: translateY( calc( -1 * {scrollY * 0.75}px + 50vh))"
>
	{#each filteredSteps as step}
		{@const stepIndex = getScrollyTextIndex(step)}
		{#if step?.trackHeaderText}
			<div
				bind:clientHeight={$stepHeights[stepIndex]}
				class="track-section heading"
				class:active={stepIndex <= scrollParams?.index}
			>
				<div class="heading-container">
					<span> {step?.trackHeaderText} </span>
				</div>
			</div>
		{:else if step?.trackLogText}
			<div
				bind:clientHeight={$stepHeights[stepIndex]}
				class="track-section"
				class:active={stepIndex <= scrollParams?.index}
				style:--additional-padding="{Math.random() * 80}px"
			>
				<div class="log-container">
					<span>
						{step?.trackLogText}
					</span>

					<div class="arrow">
						<svg
							width="21"
							height="19"
							viewBox="0 0 21 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.999999 16.0001C15.5 18 18.5 15.5 18.5 0.500002"
								stroke="#444444"
								stroke-width="4"
							/>
						</svg>
					</div>
				</div>
			</div>
		{/if}
	{/each}

	{#if scrollParams?.index > 1}
		<div class="tracker" style:top="{trackHeight * scrollParams?.progress}px"></div>
	{/if}
</div>

<style lang="scss">
	.track {
		width: 100%;
		height: 100%;
		padding: 32px 0;

		.track-section {
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: end;
			align-items: center;
			opacity: 0;

			padding: calc(10px + var(--additional-padding)) 16px;

			height: fit-content;
			border-right: 10px solid #444;
			transition: all 1s ease-in-out;

			&.active {
				opacity: 1;

				.log-container {
					transform: scale(1) rotate(0deg);
				}
			}

			&.heading {
				height: 80px;
				padding: 10px 0px 10px 20px;
			}

			.heading-container {
				position: relative;

				padding: 6px 20px 6px 12px;
				border: 2px solid #444;
				border-right: none;
				border-top-left-radius: 100px;
				border-bottom-left-radius: 100px;
				background-color: #fff;

				&::after {
					content: '';
					position: absolute;
					top: 50%;
					right: 0;
					transform: translate(calc(50% + 5px), -50%);

					width: 40px;
					height: 40px;
					background-color: #fff;
					border: 4px solid #444;
					border-radius: 100px;
				}

				span {
					font-family: Roboto, sans-serif;
					font-size: calc(var(--font-size-1) - 1.75px);
					font-weight: 500;
					white-space: nowrap;
				}
			}

			.log-container {
				position: relative;

				padding: 8px 14px;
				border: 1px solid #444;
				border-radius: 6px;
				background-color: #b2cecf;
				transform-origin: calc(100% + 10px) center;

				transition: transform 0.2s ease-in 0.2s;
				transform: scale(0.99) rotate(-2deg);

				span {
					font-family: Roboto, sans-serif;
					font-size: var(--font-size-0);
				}

				.arrow {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translate(100%, -50%) scale(1.03);
				}
			}
		}

		.tracker {
			position: absolute;
			top: 0;
			right: 4px;
			transform: translate(50%, -100%);

			width: 36px;
			height: 36px;
			border: 4px solid #298f94;
			border-radius: 100px;
			background-color: white;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 16px;
				height: 16px;
				background-color: #298f94;
				border-radius: 100px;
			}
		}
	}
</style>
