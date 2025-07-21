<script>
	let { title = '', subtitle = '', chapter = 0, children } = $props();
</script>

<section class="body-section">
	<div class="title-container">
		<div class="title-row">
			{#if chapter}
				<div class="chapter-number">
					<p>{chapter}</p>
				</div>
			{/if}

			<h2 class="title">{title}</h2>
		</div>
		{#if subtitle}
			<div class="subtitle-row">
				<p class="subtitle">{subtitle}</p>
			</div>
		{/if}
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

				width: clamp(64px, 10vw, 96px);
				height: clamp(64px, 10vw, 96px);
				min-width: clamp(64px, 10vw, 96px);
				min-height: clamp(64px, 10vw, 96px);
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

			@media (max-width: 650px) {
				justify-content: flex-start;
				.chapter-number {
					font-size: 42px;
				}

				h2 {
					font-size: var(--font-size-2);
					line-height: 1.2;
				}
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
				font-style: italic;
				font-size: calc(var(--font-size-0) + 1px);
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
