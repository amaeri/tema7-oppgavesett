<script>
	let y;
	$: skala = y / 20;
</script>

<svelte:window bind:scrollY={y} />
<main>
	<div class="large" style="transform: rotate({-y}deg) scale({skala})"></div>
	<div class="medium" style="transform: rotate({y}deg) scale({skala})"></div>
	<div class="small" style="transform: rotate({-y}deg) scale({skala})">
		<p>Ha en fin dag!</p>
	</div>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		background-color: #003F6E;
		height: 500vh;
		padding: 1rem;
		font-family: 'Poppins';
	}	
	
	div {
		padding: 1rem;
		position: fixed;
	}
	
	.large {
		width: 170px;
		height: 170px;
		left: calc(50% - 80px);
		top: calc(50% - 80px);
		background-color: #BEE3FF;
	}
	
	.medium {
		width: 110px;
		height: 110px;
		left: calc(50% - 50px);
		top: calc(50% - 50px);
		background-color: #297AB7;
	}
	
	.small {
		width: 70px;
		height: 70px;
		left: calc(50% - 30px);
		top: calc(50% - 30px);
		background-color: #BEE3FF;
		color: #297AB7;
		text-align: center;
	}
</style>