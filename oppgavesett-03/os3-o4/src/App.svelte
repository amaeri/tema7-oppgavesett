<script>
	let overskrift = ""
	let avsnitt = ""
	let link = ""
</script>

<main>
	<section>
		<div id="oppgaver">
			<h1>Oppgave 4</h1>
        		<p>Klarer du å lage en artikkel med Svelte. Du skal bruke tre input-felter hvor man skal kunne skrive inn tittel, tekst i avsnittet og hvor du kan lese mer om det artikkelen handler om.</p>
		</div>
		
		<article>
			<p><input bind:value={overskrift} placeholder="Skriv inn overskrift"></p>
			<p><input bind:value={avsnitt} placeholder="Skriv inn tekst"></p>
			<p><input bind:value={link} placeholder="Legg inn link"></p>

			<div>
				<h1>{overskrift}</h1> 
				<p>{avsnitt}</p> 
				<a href="{link}">Les mer her</a>
			</div>
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

	#oppgaver {
		border-bottom: 1px white solid;
	}
	
	a {
		text-decoration: none;
		color: white
	}
	
</style>