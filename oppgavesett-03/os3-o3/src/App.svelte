<script>
	let bilde = ""
	let bredde = "" + "px"
	let tittel = ""
</script>


<main>
	<section>
		<div id="oppgaver">
			<h1>Oppgave 3</h1>
			<p>a) Lag en nettside som viser et bilde. La brukeren velge hvilket bilde som skal vises.</p>
			<p>b) La også brukeren velge hvor bredt bildet skal være og hvilken title bildet skal ha.</p>
		</div>
		
		<article>
			<p><input bind:value={bilde} placeholder="Legg inn URL til bildet"></p>
			<p><input bind:value={bredde} placeholder="Velg bredde på bildet"></p>
			<p><input bind:value={tittel} placeholder="Velg tittel på bildet"></p>
		
			<div>
				<img src="{bilde}" alt="bilde" style= width:{bredde}>
				<h1>{tittel}</h1> 
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
	
</style>