<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">	
	import { getContext, onMount } from 'svelte';

	const terminal = getContext('terminal');

	onMount(async () => {
		try {
			await terminal.send(modes.Text);
		} catch (error) {
			console.error(error)
		}
	});

	import Terminal from '$lib/Terminal.svelte';
	import { modes } from '$lib/modes';

</script>

<svelte:head>
	<title>Терминал</title>

</svelte:head>

<section>
	<Terminal/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		height: calc(100vh - 100px);
	}
</style>
