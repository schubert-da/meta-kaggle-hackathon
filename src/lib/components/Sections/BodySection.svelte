<script>
	let { title = '', subtitle = '', chapter = 0, children } = $props();
</script>

<section class="body-section">
	<div class="title-container">
		<div class="title-row">
			<div class="chapter-number">
				<p>{chapter}</p>
			</div>

			<h2 class="title">{title}</h2>
		</div>
		<div class="subtitle-row">
			<p class="subtitle">{subtitle}</p>
		</div>
	</div>

	<div class="text-container">
		{@render children()}
	</div>
</section>

<style lang="scss">
	section.body-section {
		width: 100%;
		margin-bottom: 100px;

		.title-container {
			margin-bottom: 80px;
		}

		.title-row {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
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

			p {
				text-align: right;
				text-wrap: balance;
			}
		}

		.text-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.5rem;
		}
	}
</style>
