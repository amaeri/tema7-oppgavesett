<script>
	
	let klasse = "faller"
	
	let tall1 = 10
	let tall2 = 10
	$: fasit = tall1 * tall2
	let svar = ""
	let theGameIsOn = true
	$: riktigsvar = (fasit === svar)
	$: regnestykke = `${tall1} x ${tall2}`
	let poeng = 0
	
	const lagNyeTall = () => {
		tall1 =  Math.ceil(Math.random() * 10)
		tall2 =  Math.ceil(Math.random() * 10)
	}
	
	const sjekkSvar = () => {
		if(riktigsvar && theGameIsOn) {
			lagNyeTall()
			svar = ""	
			klasse = ""
			poeng++
			setTimeout( () => { klasse = "faller" }, 50 )
		}
		
	}
	
	const gameOver = () => {
		theGameIsOn = false
		if (gameOver) {
			txt.innerHTML = "GAME OVER"
			txt.style.color = "red"
		}
	}
	
</script>


<section>
	<header>
		<div class="oversikt">
			<label>Poeng</label>
			<p>{poeng}</p>
		</div>
		<div class="oversikt">
			<label>Highscore</label>
			<p>{poeng}</p>
		</div>
	</header>	
	
	<main>
		<p id="txt">You can do it!</p>
		<div on:animationend={gameOver} class="{klasse}">{regnestykke}</div>	
	</main>
	
	<footer>
		<input type="number" placeholder="Skriv inn svar" bind:value={svar} on:input={sjekkSvar}>
	</footer>
	
</section>

<style>
	
	* {
		margin: 0;
		box-sizing: border-box;
	}
	
	section {
		display: grid;
		grid-template-rows: auto 360px auto;
		width: 350px;
		background-color: #BEE3FF;
		margin: 20px auto;
	}

	header {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: #003F6E;
		padding: 0.5rem;	
	}

	.oversikt {	
		text-align: center;
		color: white;
	}

	.oversikt p {
		font-size: 2rem;
	}

	#txt {
		background-color: #003F6E;
		color: white;
		text-align: center;
		padding: 1rem;
	}

	main div {
		width: 200px;
		height: 50px;
		line-height: 50px;
		margin: 10px auto;
		background-color: #297AB7;
		color: white;
		text-align: center;
		font-size: 2rem;
	}

	@keyframes fallNed {
		to {
			transform: translateY(250px);
		}
	}

	.faller {
		animation: fallNed 4s linear forwards;
	}
	
	footer {
		background-color: #003F6E;
		border: 4px solid #003F6E;
	}
	
	input {
		width: 100%;
		padding: 0.5rem;
		font-size: 1.75rem;
		text-align: center;
		border: none;
	}
	
	input:focus {
		outline: none;
	}

</style>