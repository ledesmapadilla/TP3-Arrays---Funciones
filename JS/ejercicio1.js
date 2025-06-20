const titulo=document.writeln(`<p class=p-3>Lista de meses</p>`)

const meses = [
  `Enero`,
  `Febrero`,
  `Marzo`,
  `Abril`,
  `Mayo`,
  `Junio`,
  `Julio`,
  `Agosto`,
  `Septiembre`,
  `Octubre`,
  `Noviembre`,
  `Diciembre`,
];

document.writeln(`<ul class=py-2>`);
for (i = 0; i < 12; i++) {
  document.writeln(`<li>${meses[i]}</li>`);
}

document.writeln(`</ul>`);
