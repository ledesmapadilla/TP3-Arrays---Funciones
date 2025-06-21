function perimetro(){document.writeln(`
  El perimetro del rectangulo es ${
  2*(largo+ancho)}`)
}



const largo=parseInt(prompt(`Ingrese un lado del rectangulo`))
const ancho=parseInt(prompt(`Ingrese el otro lado del rectangulo`))

perimetro()