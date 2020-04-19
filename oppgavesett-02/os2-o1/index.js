const inpNavn = document.querySelector("#inpNavn");
const btn = document.querySelector("#btn");

function visNavn() {
  oppgavesvar.innerHTML += `<p>Navnet ditt er ${inpNavn.value}</p>`;
}

btn.onclick = visNavn;
