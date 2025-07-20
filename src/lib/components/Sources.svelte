<script>
	import { slide } from 'svelte/transition';

	export let title = 'Sources and Methodology';

	let isExpanded = false;

	function toggle() {
		isExpanded = !isExpanded;
	}
</script>

<div class="accordion">
	<button class="accordion-header" on:click={toggle} aria-expanded={isExpanded}>
		<span class="title">{title}</span>
		<svg
			class="chevron"
			class:expanded={isExpanded}
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 6L8 10L12 6"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>

	{#if isExpanded}
		<div class="accordion-panel" transition:slide={{ duration: 200 }}>
			<div class="panel-content">
				<slot>
					<p>No details provided</p>
				</slot>
			</div>
		</div>
	{/if}
</div>

<style>
	.accordion {
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		background: white;
		width: 100%;
		box-sizing: border-box;
		box-shadow:
			rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	}

	.accordion-header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		padding: 12px 16px;
		background: none;
		border: none;
		cursor: pointer;
		transition: background-color 0.15s ease;

		font-family: 'Playfair Display', serif;
		font-size: var(--font-size-0);
		font-weight: 700;
	}

	.accordion-header:hover {
		background-color: #f9fafb;
	}

	.title {
		font-size: var(--font-size-1);
		font-weight: 500;
		color: #333;
		text-align: left;
	}

	.chevron {
		transition: transform 0.2s ease;
		color: #6b7280;
		flex-shrink: 0;
	}

	.chevron.expanded {
		transform: rotate(180deg);
	}

	.accordion-panel {
		border-top: 1px solid #ddd;
	}

	.panel-content {
		padding: 16px;
		width: 100%;
		box-sizing: border-box;
	}

	:global(.panel-content p) {
		max-width: 75ch;
		font-size: 16px;
		color: #555;
	}

	:global(.panel-content h3) {
		color: #333;
	}

	.panel-content li {
		margin-bottom: 4px;
	}

	.panel-content p:last-child {
		margin-bottom: 0;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.accordion-header {
			padding: 10px 12px;
			font-size: 13px;
		}

		.panel-content {
			padding: 12px;
		}

		.panel-content p {
			font-size: 13px;
		}
	}
</style>
