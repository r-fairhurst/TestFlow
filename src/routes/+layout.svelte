<script lang="ts">
	import './layout.css';

	const { children } = $props();
</script>

<style>
	:root {
		background-color: light-dark(rgb(20, 20, 20), white);
		color: light-dark(white, black);		
	}
</style>

{@render children()}
