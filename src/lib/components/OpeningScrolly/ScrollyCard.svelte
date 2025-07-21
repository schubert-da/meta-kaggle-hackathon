<div class="card">
	<div class="card-image">
		<img src="/images/share-image.jpg" alt="Logo of a Kaggle competition posting" />
	</div>

	<div class="card-content">
		<h2 class="card-title">NewCORP - Lung Cancer Prediction 2025</h2>
		<div class="card-desc">
			Derive exoplanet signals from Ariels optical readings to predict cool stuff.
		</div>
	</div>

	<div class="card-footer">
		<span class="prize"> $25,000 </span>
		<span class="deadline"> 3mo to go </span>
	</div>
</div>

<style lang="scss">
	.card {
		--card-padding: 14px;

		overflow: hidden;

		border: 1px solid #666;
		border-radius: 6px;
		box-shadow:
			rgba(0, 0, 0, 0.19) 0px 10px 20px,
			rgba(0, 0, 0, 0.23) 0px 6px 6px;

		font-family: Roboto, sans-serif;
		color: #333;

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
