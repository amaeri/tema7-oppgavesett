<script>
	let skriftstr = "" + "px"
	let skrifttype = ""
	let skriftfarge = ""
	let bakgrunnsfarge = ""
</script>

<main style="background-color: {bakgrunnsfarge}">
	<section>
		<div style="font-size: {skriftstr}">
		<div style="font-family: {skrifttype}">
		<div style="color: {skriftfarge}">
			<div id="oppgavetekst">
				<h1>Oppgave 6</h1>
				<p>Bruk input-felter til å styre skrift-størrelse, skrift-type, farge på tekst og bakgrunnsfarge
					på en nettside.</p>
			</div>

			<p>Velg skriftstørrelse</p>
			<input bind:value={skriftstr}>

			<p>Velg skrifttype</p>
			<input bind:value={skrifttype} placeholder>

			<p>Velg skriftfarge</p>
			<input type="color" bind:value={skriftfarge}>

			<p>Velg bakgrunnsfarge</p>
			<input type="color" bind:value={bakgrunnsfarge}>
		</div>
	</section>
</main>


<style>
	main {
		display: grid;
		place-items: center;
		min-height: 100vh;
		padding: 1rem;
		font-family: 'Poppins';
	}

	section {
		width: 70%;
		background-color: #003F6E;
		color: white;
		padding: 1rem;
	}

	#oppgavetekst {
		border-bottom: 1px solid white;
	}
</style>