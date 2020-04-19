const tall= prompt("Skriv inn en pris uten moms:");
const prisUmoms = (Number (tall));
const moms = (Number (tall) * (0.25));
const prisMmoms = (Number (tall) * (1.25));

document.write(`
<ul>
<li>Pris uten moms: ${prisUmoms}</li>
<li>Moms: ${moms}</li>
<li>Pris med moms: ${prisMmoms}</li>
</ul>
`);

