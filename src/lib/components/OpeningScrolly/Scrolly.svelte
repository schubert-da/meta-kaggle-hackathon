<script>
	import Scroller from '@sveltejs/svelte-scroller';
	import ScrollyCard from './ScrollyCard.svelte';
	import ScrollyTrack from './ScrollyTrack.svelte';

	let count;
	let index;
	let offset;
	let progress;
	let top = 0;
	let threshold = 0.5;
	let bottom = 1.1;
</script>

<div class="scrolly-container">
	<Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
		<div slot="background">
			<div class="track-container">
				<ScrollyTrack></ScrollyTrack>
			</div>
			<div class="card-container">
				<ScrollyCard></ScrollyCard>
			</div>
		</div>

		<div slot="foreground">
			<section>Section 1</section>
			<section>Section 2</section>
			<section>Section 3</section>
			<section>Section 4</section>
			<section>Section 5</section>
		</div>
	</Scroller>
</div>

<style lang="scss">
	.scrolly-container {
		position: relative;

		width: 100%;
	}

	[slot='background'] {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		width: 100%;
		max-width: 900px;
		height: 100vh;

		.track-container {
			width: clamp(160px, 50%, 450px);
			height: 100%;
		}

		.card-container {
			width: clamp(160px, 50%, 300px);
			height: 100%;
			max-height: 450px;
		}
	}

	[slot='foreground'] {
		width: 100%;
		pointer-events: none;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 80vh;
		/* border: 2px solid red; */
		color: #222;
		padding: 1em;
		margin: 0 auto;
	}
</style>
