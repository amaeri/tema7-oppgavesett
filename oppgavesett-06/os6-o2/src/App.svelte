<script>
	let url = "https://pokeapi.co/api/v2/pokemon/12"

	let pokemon = {}
	
	const getPokemons = async () => {
		
		const response = await fetch(url)
		const json = await response.json()
		pokemon = json
		console.log(pokemon)
	}

	getPokemons()
	
</script>

<main>
	<section>
		<div>
			<h1>Oppgave 2</h1>
			<p>Lag en nettside som ser ut omtrent som på bildet under. Husk at du nå ikke skal hente inn mange Pokemoner, men bare BUTTERFREE. Han har id=12.</p>
		</div>

		<article>
			{#if pokemon.id === 12}
				<h3>{pokemon.name}</h3>
				<p><b>Base experience:</b> {pokemon.base_experience}</p>
				<p><b>Weight:</b> {pokemon.weight}</p>
				<p><b>Height:</b> {pokemon.height}</p>
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