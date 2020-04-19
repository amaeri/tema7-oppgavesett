const bilde= prompt("URL til bildet");
const tittel= prompt("Hva er tittelen på bildet?");
const bredde= prompt("Hvor bredt skal bildet være?");

document.write(`
<img src="${bilde}"
title="${tittel}"
style="width: ${bredde}px">
`);
