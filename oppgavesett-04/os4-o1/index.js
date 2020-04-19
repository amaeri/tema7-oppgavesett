const listFilmer = document.querySelector("#listFilmer");
const inpNyFilm = document.querySelector("#inpNyFilm");
const btn = document.querySelector("#btn");

// Oppgave 1a
let filmer = ["Staying Alive", "Bad Moms", "A Star Is Born", "Mamma Mia"];

// Oppgave 1b
filmer = [...filmer, "Mamma Mia 2"];
filmer = ["Max Manus", ...filmer];


// Oppgave 1c
console.log ("Filmen på plass nummer 3 i arrayet er:");
console.log ( filmer [3] );

// Oppgave 1d
function visFilmer() {

    listFilmer.innerHTML = "";

    for(const film of filmer) {
        listFilmer.innerHTML += `<li>${film}</li>`;
    }
    
    inpNyFilm.value = "";
    inpNyFilm.focus();
}

// Oppgave 1e
function leggTilFilm() {
    filmer = [...filmer, inpNyFilm.value];
    visFilmer();
}

btn.onclick = leggTilFilm;