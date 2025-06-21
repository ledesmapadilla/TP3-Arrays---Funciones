const sumas = [];
let contadorSuma = new Map(); /* creo un mapa de nombre contadorSuma */

for (i = 1; i <= 5; i++) {
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);
  let adicion = dado1 + dado2;
  sumas.push(adicion);


/* contar la ocurrencia de cada suma */

if (contadorSuma.has(adicion))/* verifica si la adicion ya esta en el mapa */ {
  contadorSuma.set(adicion, contadorSuma.get(adicion) + 1);/* con set, incrementa el valor */
} else {
  contadorSuma.set(adicion, 1);
}}
