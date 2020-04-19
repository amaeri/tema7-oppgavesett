const inpFav = document.querySelector("#inpFav");

function leggTilFav() {
    favoritt.innerHTML += `<li>${inpFav.value}</li>`; 
}

inpFav.onchange =leggTilFav;