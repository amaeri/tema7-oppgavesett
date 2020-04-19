const dropdownlist = document.querySelector("#dropdownlist");

function changeFont() {
    document.body.style.fontStyle = dropdownlist.value;
    document.body.style.fontFamily = dropdownlist.value;
}

dropdownlist.onchange = changeFont;