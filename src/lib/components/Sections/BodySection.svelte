<script>
	let { children } = $props();
</script>

<section class="body-section">
	<div class="title-container">
		<div class="title-row">
			<div class="chapter-number">
				<p>1</p>
			</div>

			<h2 class="title">Competing in Kaggle Competitions don't make you a better Data Scientist</h2>
		</div>
		<div class="subtitle-row">
			<p class="subtitle">... But that depends on how you define “competing”</p>
		</div>
	</div>

	<div class="text-container">
		{@render children()}
	</div>
</section>

<style lang="scss">
	section.body-section {
		width: 100%;

		.title-container {
			margin-bottom: 80px;
		}

		.title-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 2rem;

			padding-bottom: 16px;
			border-bottom: 2px solid #000;

			.chapter-number {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				width: 96px;
				height: 96px;
				min-width: 96px;
				min-height: 96px;
				border: 1px solid #838383;
				border-radius: 8px;

				font-family: 'Segoe UI';
				font-size: 64px;
				font-weight: 600;
				color: #fff;
				background-color: #ddbbc2;
				stroke: #000;
				stroke-width: 1px;
			}
		}

		.subtitle-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;

			padding: 10px 12px;
			border-bottom: 1px solid #444;
		}

		.text-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.5rem;
		}
	}
</style>
