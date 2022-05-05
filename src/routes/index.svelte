<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	console.log('hey');
	export let terminal = 'kek';
	
	console.log('terminal', terminal);
</script>

<svelte:head>
	<title>Главная</title>
</svelte:head>

<section>
	<h1 class="text-3xl font-bold">
		Hello world!
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
