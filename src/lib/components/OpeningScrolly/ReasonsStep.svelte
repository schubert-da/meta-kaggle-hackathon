<div class="reasons-container">
	<p>
		There are a couple ways Kaggle competitions differ from real world ML projects. In fact you may
		have skimmed over them in the last competition you participated in:
	</p>

	<div class="reasons-list">
		<div class="reason-card">
			<div class="card-image">
				<img src="/images/reasons-objectives.jpg" alt="Well defined objectives" />
			</div>

			<div class="card-content">
				<h3>1. Well defined objectives</h3>
				<p>
					Kaggle competitions have a well defined objective and metrics that models will be scored
					against. <br /><br />In the real world, stakeholders themselves might not know what they
					want.
				</p>
			</div>
		</div>

		<div class="reason-card">
			<div class="card-image">
				<img src="/images/reasons-data.jpg" alt="Data is handed to you" />
			</div>
			<div class="card-content">
				<h3>2. Data is handed to you</h3>
				<p>
					In actual projects, data collection and cleaning can be a significant part of the work. <br
					/><br /> Knowing what data to look for and where to find it, how much is enough, the cleaning
					processes required are all part of the game
				</p>
			</div>
		</div>

		<div class="reason-card">
			<div class="card-image">
				<img src="/images/reasons-collaborating.jpg" alt="Collaborating on work" />
			</div>
			<div class="card-content">
				<h3>3. Collaborating on work</h3>
				<p>
					In a professional setting, there are rarely any notebooks to fork or kernels showing you
					the 'secret sauce' to building the perfect model. You start with a blank notebook and just
					a broad description and raw data.
				</p>
			</div>
		</div>
	</div>

	<p>
		These are just a few of the ways that show that Kaggle competitions are far from a perfect
		mirror to real life work.
	</p>
</div>

<style lang="scss">
	.reasons-container {
		width: 100%;

		p {
			font-size: var(--font-size-0);
		}
	}

	.reasons-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;

		margin: 32px auto;
	}

	.reason-card {
		--card-padding: 14px;

		overflow: hidden;

		width: clamp(220px, 100%, 280px);
		background-color: #fff;
		border: 1px solid #666;
		border-radius: 6px;
		box-shadow:
			rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

		font-family: Roboto, sans-serif;
		color: #333;

		.card-image {
			width: 100%;
			height: 100%;
			max-height: 200px;
			object-fit: contain;
			overflow: hidden;
		}

		.card-content {
			padding: 20px var(--card-padding);
			border-top: 3px solid #666;

			h3 {
				margin-bottom: 8px;

				font-family: Roboto, sans-serif;
				font-weight: 600;
				font-size: 22px;
				letter-spacing: -0.2px;
				line-height: 1.2;
			}

			.p {
				font-size: 14px;
			}
		}
	}
</style>
