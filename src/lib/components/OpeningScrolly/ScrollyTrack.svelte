<div class="track">
	<div class="track-section heading">
		<div class="heading-container">
			<span> Registration </span>
		</div>
	</div>
	<div class="track-section" style:--additional-padding="{Math.random() * 20}px">
		<div class="log-container">
			<span>
				You haven’t worked with image data before so you decide to fork a starter notebook
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
	<div class="track-section" style:--additional-padding="{Math.random() * 20}px">
		<div class="log-container">
			<span> Then we study one of the early EDA notebooks </span>

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
	<div class="track-section heading">
		<div class="heading-container">
			<span> Week 2-4 </span>
		</div>
	</div>
</div>

<style lang="scss">
	.track {
		width: 100%;
		height: 100%;
		padding: 32px 0;
		border: 1px solid red;

		.track-section {
			display: flex;
			flex-direction: row;
			justify-content: end;
			align-items: center;
			padding: calc(10px + var(--additional-padding)) 16px;

			height: fit-content;
			border-right: 10px solid #444;

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
				}
			}

			.log-container {
				position: relative;

				padding: 8px 14px;
				border: 1px solid #444;
				border-radius: 6px;
				background-color: #edcfcf;

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
	}
</style>
