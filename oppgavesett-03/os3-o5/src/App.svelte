<script>
	let tall = ""
	$: prisUmoms = tall
	$: moms = tall * 0.25
	$: prisMmoms = tall * 1.25
</script>

<main>
	<section>
		<div id="oppgaver">
			<h1>Oppgave 5</h1>
			<p>Lag et program hvor du skriver inn pris på en vare uten moms. Programmet skal så vise følgende informasjon:</p>
			
			<ul>
    			<li>Pris uten moms</li>
    			<li>Moms</li>
    			<li>Pris med moms</li>
			</ul>
		</div>
		
		<article>
			<input type="number" bind:value={tall} placeholder="Pris uten moms"> 
			
			<ul>
				<li>Pris uten moms : {prisUmoms}</li>
				<li>Moms : {moms}</li>
				<li>Pris med moms : {prisMmoms}</li>
			</ul>
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