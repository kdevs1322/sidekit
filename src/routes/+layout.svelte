<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Menue from '$lib/components/Menue.svelte';

	import sidebarStore from '$lib/stores/sidebar.js';

	import './styles.css';
</script>

<main>
	<Sidebar classes="green" style="background: blue; ">
		<svelte:fragment slot="header">
			<h3 on:click={sidebarStore.toggleCollapse}>here lies the title</h3>
		</svelte:fragment>
		<Menue />
		<svelte:fragment slot="footer">
			<h3>here be the footer</h3>
		</svelte:fragment>
	</Sidebar>

	<section>
		<slot />
	</section>
</main>

<style>
	main {
		position: relative;
		display: flex;
		gap: 2rem;
	}
</style>
