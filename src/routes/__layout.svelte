<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';

	import { setContext } from 'svelte';

	import { BluetoothTerminal } from "$lib/BluetoothTerminal";
	import { defaultDeviceName, deviceName } from '$lib/stores';

	const serviveUuid = 0xFFE0
	const characteristicUuid = 0xFFE1

	export const terminal = new BluetoothTerminal(serviveUuid,characteristicUuid, '\n','\n');
	setContext('terminal', terminal);

	async function handleChangeBridgest({ target }) {
		await terminal.send(`^${target.value}`);
	}

	let deviceNameLabel: string;

	deviceName.subscribe(value => {
		deviceNameLabel = value;
	});
</script>

<Header terminal={terminal}/>

{#if deviceNameLabel === defaultDeviceName}
	<div class="disabled-notify">
		<span class="text-2xl text-slate-50">
			Нет подключеного устройства
		</span>
	</div>
{/if}

<main class:blur="{deviceNameLabel === defaultDeviceName}">
	<div class="bridgest">
		<label 
			for="volume" 
			class="text-2xl text-slate-50">
			Яркость
		</label>
		<input
			on:change={handleChangeBridgest}
			type="range" 
			id="volume" 
			name="volume"
			min="2" 
			max="255"
		>
	  </div>
	<slot/>
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100vw;
		margin: 0 auto;
		box-sizing: border-box
	}

	main.blur {
		opacity: 0.5;
	}
	
	.disabled-notify {
		position: absolute;
		padding: 50% 0;
		text-align: center;
		width: 100%;
	}

	.disabled-notify span {
		text-shadow: 2px 2px 10px #000000;
	}

	.bridgest {
		display: flex;
    	flex-direction: column;
		margin: 10px 0;
		zoom: 1.1;
	}
</style>
