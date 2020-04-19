const navn = document.querySelector("#navn");
const alder = document.querySelector("#alder");
const btn = document.querySelector("#btn");

let venneliste = document.querySelector("#venneliste");

// Oppgave 2a
let venner = [
    { navn: "Idun", alder: 28 },
    { navn: "Sandra", alder: 29 },
    { navn: "Sofie", alder: 26 }
];

// Oppgave 2b
function visVenner() {
    venneliste.innerHTML = "<div><b>Navn</b></div><div><b>Alder</b></div>";

    for(const venn of venner) {
        venneliste.innerHTML += `
            <div>${venn.navn}</div>
            <div>${venn.alder}</div>
        `
    }
}

visVenner()

// Oppgave 2c
function leggTilVenn() {
    const nyVenn = { navn: navn.value, alder: alder.value }
    venner = [nyVenn, ...venner]
    
    visVenner();
}

btn.onclick = leggTilVenn;