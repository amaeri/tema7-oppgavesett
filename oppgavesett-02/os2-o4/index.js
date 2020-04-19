const inpTall1 = document.querySelector("#inpTall1");
const inpTall2 = document.querySelector("#inpTall2");

function flyttFirkant() {
    firkant.style.left = inpTall1.value + "px"
    firkant.style.top = inpTall2.value + "px"
}

inpTall1.oninput = flyttFirkant;
inpTall2.oninput = flyttFirkant;