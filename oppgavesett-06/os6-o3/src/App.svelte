<script>
	let pokemon = {}
	let nummer = 12
	
	const getPokemons = async () => {
		
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nummer}`)
		const json = await response.json()
		pokemon = json
		console.log(pokemon)
	}

	getPokemons()
	
</script>

<main>
	<section>
		<div>
			<h1>Oppgave 3</h1>
			<p>Legg merke til at jeg kan bytte person ved å endre tallet i forrige oppgave. BUTTERFREE er Pokemon nummer 12, men hva om vi endrer til 2?</p>
		</div>

		<p>
			<input type="number" bind:value={nummer} on:input={getPokemons}>
		</p>

		<article>
			{#if pokemon.id}
				<h3>{pokemon.name}</h3>
				<p><b>Base experience:</b> {pokemon.base_experience}</p>
				<p><b>Weight:</b> {pokemon.weight}</p>
				<p><b>Height:</b> {pokemon.height}</p>

			{:else}
				<h2>Laster pokemons...</h2>
			{/if}
		</article>
	</section>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		padding: 1rem;
		font-family: 'Poppins';
	}

	section{
		width: 70%;
		background-color: #003F6E;
		color: white;
    	padding: 1rem;
	}	

	div {
		border-bottom: 1px white solid;
	}

	h3 {
		text-transform: uppercase;
	}
	
</style>

