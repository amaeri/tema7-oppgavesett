<script>
	let forrett = ""
	let hovedrett = ""
	let dessert = ""
</script>

<main>
	<section>
		<div id="oppgaver">
			<h1>Oppgave 2</h1>
    		<p>Lag en nettside som viser en meny. Be brukeren om forrett, hovedrett og dessert. Vis resultatet i en liste.</p>
		</div>	
		
		<article>
			<p> Skriv inn det du ønsker til forrett, hovedrett og dessert.</p>
			<p><input bind:value={forrett} placeholder="Forrett"></p>
			<p><input bind:value={hovedrett} placeholder="Hovedrett"></p>
			<p><input bind:value={dessert} placeholder="Dessert"></p>

			<div>
				<ol>
					<li>Forrett: {forrett}</li>
					<li>Hovedrett: {hovedrett}</li>
					<li>Dessert: {dessert}</li>
				</ol>
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
	
	article {
		padding-top: 1rem;
	}
	
</style>