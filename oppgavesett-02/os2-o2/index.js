const a = prompt("Skriv inn bredde");
const b = prompt("Skriv inn høyde");

function leggSammen(a, b) {
    const c = a * b;
    return c;
  }

  const c = leggSammen(a, b);
  console.log(c);

  document.write("Areal = ")
  document.write(c);
  console.log(c);