<script>
	import { fly } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
	import sidebarStore from '../stores/sidebar.js';

	/**
	 * A string of class names for the sidebar component
	 * @type {string} class names
	 */
	export let classes = '';

	/**
	 * If ture includes a slot for a header
	 * @type {boolean} header
	 */
	export let header = true;

	/**
	 * If false will not include a slot for a footer
	 * @type {boolean} footer
	 */
	export let footer = true;

	/**
	 * A string to overiride the default styles
	 * @type {string} class names
	 */
	export let style = '';

	const classNames = classes ? classes : '';
</script>

<div>
	<aside class={classNames} class:collapsed={$sidebarStore.collapsed} {style}>
		{#if header}
			<div class="header">
				<slot name="header" />
			</div>
		{/if}

		<div class="main">
			<slot />
		</div>

		{#if footer}
			<div class="footer">
				<slot name="footer" />
			</div>
		{/if}
	</aside>
</div>

<style>
	div {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		z-index: 3;
	}

	aside {
		position: relative;
		background: tomato;
		width: 259px;
		/* padding: 0 3rem; */
		transition: width 0.3s ease-in;
	}

	aside.collapsed {
		width: 80px;
		padding: 0 0.5rem;
		transition: width 0.3s ease-out;
	}

	.header {
		padding: 12px 15px;
		background: lime;
	}
	.main {
		position: relative;
		background: red;
		width: auto;
		margin: 20px;
	}
	.footer {
		padding: 12px 15px;
		margin-top: 20px;
		background: lime;
	}
</style>
