

function multiplicar(numero, posicion) {
  const resultado = numero * posicion;
  return resultado
}
const numero = parseInt(prompt(`Elija un numero`));

for(i=1; i<=10; i++){
 
  document.writeln(`<p class=pt-2>${numero} x ${i}= ${multiplicar(numero, i)}</p>`);
}



