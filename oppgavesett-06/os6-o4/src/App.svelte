<script>
	let albums = []

	let url = './karpe.json'

	const getAlbums = async () => {
		const response = await fetch(url)
		const json = await response.json()
		albums = json.results
		return(url)
	}

	getAlbums()
	
</script>

<main>
	<section>
		<div>
			<h1>Oppgave 4</h1>
			<p>Lag deg din egen JSON-fil med data om et tema du synes er spennende, sjekk i JSONLint at dataene dine er gyldige, og presenter dem på en nettside.</p>
		</div>

		<h1>KARPE</h1>

		<article>
			{#each albums as album}
			<article id="album">
					<h3>{album.album}</h3>
					<p>Format: {album.format}</p>
					<p>Utgivelsesår: {album.year}</p>
					<p>Antall sanger: {album.songs}</p>
			</article>
			{:else}
			<p>Laster album...</p>
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
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	
	#album {
		background-color: white;
		color: #003F6E;
		padding: 1rem;
		border-radius: 5px;
	}

	h3 {
		text-transform: uppercase;
	}
	
</style>