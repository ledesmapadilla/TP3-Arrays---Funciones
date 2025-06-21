let numero = parseInt(prompt(`Ingrese un numero`));
function numeroPar() {
  if (numero % 2 == 0) {
    document.writeln(`El numero ${numero} es par`);
  } else {
    document.writeln(`El numero ${numero} es impar`);
  }
}
numeroPar();