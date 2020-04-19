const inpX = document.querySelector("#inpX");
const inpY = document.querySelector("#inpY");
const inpWidth = document.querySelector("#inpWidth");
const inpHeight = document.querySelector("#inpHeight");
const inpBorderR = document.querySelector("#inpBorderR")


function moveSquare() {
    firkant.style.left = inpX.value + "px"
    firkant.style.top = inpY.value + "px"

    if (inpX.value > window.innerWidth) {
        console.log("Skjermen din er ikke bred nok")
    } else if (inpY.value > window.innerHeight) {
        console.log("Skjermen din er ikke lang nok")
    }
}

function changeSize() {
    firkant.style.width = inpWidth.value + "px";
    firkant.style.height = inpHeight.value + "px";
}

function changeRadius() {
    firkant.style.borderRadius = inpBorderR.value + "px";
}

inpX.oninput = moveSquare;
inpY.oninput = moveSquare;
inpWidth.oninput = changeSize;
inpHeight.oninput = changeSize;
inpBorderR.oninput = changeRadius;

