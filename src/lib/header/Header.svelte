<script lang="ts">
	import { deviceName, defaultDeviceName } from "$lib/stores";

	export let terminal;

	let deviceNameLabel: string;

	deviceName.subscribe(value => {
		deviceNameLabel = value;
	});

	function setDeviceName(name: string) {
		deviceName.update(() => name);
	}

	function handleConnect() {
		terminal.connect().then(() => {
			setDeviceName(terminal.getDeviceName() ? terminal.getDeviceName() : defaultDeviceName);
		});
	}

	function handleDisconnect() {
		terminal.disconnect();
		setDeviceName(defaultDeviceName);
	}

	terminal.receive = function(data: string) {
		console.log('data', data);
	};
</script>

<header>
	<div class="corner text-white">
		{!!deviceNameLabel ? deviceNameLabel : defaultDeviceName}
	</div>
	

	<div class="corner">
		<div class="buttons">

			<button 
				on:click={handleConnect} 
				type="button" 
				aria-label="Connect"
			>
				<i class="material-icons">bluetooth_connected</i>
			</button>

			<button 
				on:click={handleDisconnect} 
				type="button" 
				aria-label="Disconnect"
			>
				<i class="material-icons">bluetooth_disabled</i>
			</button>

		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 5px;
	}

	.corner {
		width: 6em;
		height: 3em;
	}

	.buttons {
		display: flex;
		justify-content: space-around;
	}

	.material-icons {
		color: #817be6;
	}
</style>
