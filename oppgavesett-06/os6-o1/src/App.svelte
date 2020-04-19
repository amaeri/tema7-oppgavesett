<script>
	let url = "https://pokeapi.co/api/v2/pokemon"

	let pokemons = []
	
	const getPokemons = async () => {
		
		const response = await fetch(url)
		const json = await response.json()
		pokemons = json.results
		console.log(pokemons)
	}

	getPokemons()
	
</script>


<main>
	<section>
		<div>
			<h1>Oppgave 1</h1>
			<p>Bruk Svelte med fetch til å bygge en nettside med en oversikt over alle Pokemonene. Det skal se omtrent ut som dette. Du skal vise frem navn på Pokemon og link til data om denne Pokemonen.</p>
		</div>

		<h1>POKÈMONS</h1>

		<article>
			{#each pokemons as pokemon}
			<article>
				<h3>{pokemon.name}</h3>
				<p>{pokemon.url}</p>
			</article>
			{:else}
				<h3>Laster pokemons....</h3>
			{/each}
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

	section {
		width: 70%;
		background-color: #003F6E;
		color: white;
		padding: 1rem;
	}

	div {
		border-bottom: 1px white solid;
	}

	article {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 1rem;
	}

	h3 {
		text-transform: uppercase;
	}
	
</style>