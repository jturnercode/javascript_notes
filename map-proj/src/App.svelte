<script>
	import Map from "./Map.svelte";
	import { MAP_API } from "./assets/env.js";

	// svelte allows you can use curly braces to control element attributes (this is not case with plain javascript)
	// see svelte:src src attribute
	const gsrc = `https://maps.googleapis.com/maps/api/js?key=${MAP_API}&callback=initMap`;
	export let ready;
</script>

<!-- svelte:head add the element to head element of index.html -->
<svelte:head>
	<script defer async src={gsrc}></script>
</svelte:head>

<!-- If ry then import Map Component -->
{#if ready}
	<Map />
{/if}

<style>
	:global(body) {
		padding: 0;
	}
</style>
