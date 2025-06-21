function respuesta() {
  if (cuentaMinusculas == 0) {
    document.writeln(`Esta frase tiene solo mayusculas`);
  } else if (cuentaMayusculas == 0) {
    document.writeln(`Esta frase tiene solo minusculas`);
  } else {
    document.writeln(`Esta frase contiene minusculas y mayusculas`);
  }
}

const texto = prompt(`Ingrese un texto`);

let largo = texto.length;

let cuentaMinusculas = 0;
let cuentaMayusculas = 0;
/* const mayusculas = [];
const minusculas = []; */

for (i = 0; i <= largo; i++) {
  let letra = texto[i];
  if (letra >= `A` && letra <= `Z`) {
    cuentaMayusculas++;
  }
}
for (i = 0; i <= largo; i++) {
  let letra = texto[i];
  if (letra >= `a` && letra <= `z`) {
    cuentaMinusculas++;
  }
}
console.log(cuentaMayusculas);
console.log(cuentaMinusculas);
respuesta();
