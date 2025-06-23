const sumas = [];
let contadorSuma = new Map(); /* creo un mapa de nombre contadorSuma */

for (i = 1; i <= 50; i++) {
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);
  let adicion = dado1 + dado2;
  sumas.push(adicion);

  /* contar la ocurrencia de cada suma */

  if (contadorSuma.has(adicion)) {
    /* verifica si la adicion ya esta en el mapa */
    contadorSuma.set(
      adicion,
      contadorSuma.get(adicion) + 1
    ); /* busca en el mapa el valor de la adicion, si lo encuentra, le suma 1 al valor que tiene asignado */
  } else {
    contadorSuma.set(
      adicion,
      1
    ); /* si no encuentra el valor adicion, quiere decir que es la primera vez que sale, entonces le asigna el valor1 */
  }
}

/* mostrar los valores */

document.writeln(`<P> Sumas--Apariciones</p>`)
contadorSuma.forEach((valor, clave) => {
  document.writeln(`<p class=p-1 m-1>${clave}    --     ${valor}</p>`);
});
