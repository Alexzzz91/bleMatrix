<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">	
	import { modes } from '$lib/modes';
	import { getContext, onMount } from 'svelte';

	const terminal = getContext('terminal');

	onMount(async () => {
		try {
			await terminal.send(modes.Text);
		} catch (error) {
			console.error(error)
		}
	});

	let inputValue = '';

	const send = async (data: string) => {
		await terminal.send(data);
	};

	function handleSumbit(event) {
		event.preventDefault();

		send(inputValue);

		inputValue = '';
	}
</script>

<svelte:head>
	<title>Бегущая строка</title>
</svelte:head>

<section>
	<form
		id="send-form"
		class="send-form"
		on:submit={handleSumbit}
	>
		<input 
			id="input" 
			type="text" 
			aria-label="Input" 
			autocomplete="off" 
			placeholder="Текст"
			autofocus
			bind:value={inputValue}
		>
	
		<button type="submit" aria-label="Send">
			<i class="material-icons">send</i>
		</button>
	</form>
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

	.send-form {
		display: flex;
		width: 100%;
	}
	
	#input {
		flex: 1;
    	padding: 20px;
	}

	.send-form button {
		padding: 20px;
	}
</style>
