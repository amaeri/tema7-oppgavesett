<script>
  let navn = ""
</script>

<main>
	<section>
		<div id="oppgaver">
			<h1>Oppgave 1</h1>
			<p>Lag en nettside som ber om navnet ditt og en hyggelig beskrivelse</p>
		</div>
	
		<article>
			<input bind:value={navn} placeholder="Skriv navn">
		
			<div>
				<p>Hei {navn}. Du er en trivelig person</p>
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