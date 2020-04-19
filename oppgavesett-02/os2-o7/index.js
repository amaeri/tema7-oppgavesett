const skriftstr = document.querySelector("#skriftstr");
const skrifttype = document.querySelector("#skrifttype")
const skriftfarge = document.querySelector("#skriftfarge")
const bakgrunnsfarge = document.querySelector("#bakgrunnsfarge")

function byttSkriftstr() {
    oppgavesvar.style.fontSize = skriftstr.value + "px";
}

function byttSkrifttype() {
    oppgavesvar.style.fontFamily = skrifttype.value;
}

function byttSkriftfarge () {
    oppgavesvar.style.color = skriftfarge.value;
}

function byttBakgrunnsfarge () {
    document.body.style.backgroundColor = bakgrunnsfarge.value;
}

skriftstr.oninput = byttSkriftstr;
skrifttype.oninput = byttSkrifttype;
skriftfarge.oninput = byttSkriftfarge;
bakgrunnsfarge.oninput = byttBakgrunnsfarge;