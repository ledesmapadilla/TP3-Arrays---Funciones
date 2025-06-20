const ciudades = [];

do {
  let lugar = prompt(`Ingrese el nombre de una ciudad`);
  ciudades.push(lugar);
} while (confirm(`Desea ingresar otra ciudad?`));

const longCiudades = ciudades.length;

/* document.writeln(`<p class=p-3>Arreglo generado: </p>`);
document.writeln(`<ul>`);
for (i = 0; i < longCiudades; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln(`</ul>`); */

document.writeln(`El arreglo de ciudades tiene ${longCiudades} elementos`);

/* primera, tercera y ultima posicion */

document.writeln(`<ul class=mt-2>
  <li> Elemento primera posicion: ${ciudades[0]}</li>
  <li> Elemento tercera posicion: ${ciudades[2]}</li>
  <li> Elemento ultima posicion: ${ciudades[longCiudades - 1]}</li>
</ul>`);

ciudades.push(`Paris`);
ciudades.splice(1, 0, `España`);
const longUltima = ciudades.length;
document.writeln(`Elemento ultima posicion: ${ciudades[longUltima - 1]}`);

document.writeln(`<h4 class=p-2> Arreglo de ciudades </h4>`);
document.writeln(`<ul>`);
for (i = 0; i < longUltima; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln(`</ul>`);
