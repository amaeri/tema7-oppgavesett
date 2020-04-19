const bilde = document.querySelector("#bilde");
const overskrift = document.querySelector("#overskrift");
const btn = document.querySelector("#btn");

function visInnhold () {
    nyheter.innerHTML += `<img src= "${bilde.value}" style= "width: 200px">`
    nyheter.innerHTML += `<h1>${overskrift.value}</h1>`
}

btn.onclick = visInnhold;