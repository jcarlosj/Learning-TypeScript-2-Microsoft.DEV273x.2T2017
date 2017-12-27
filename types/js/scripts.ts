/* Types: Interfaces */

// La función requiere como parámetro un objeto que tenga una propiedad de nombre 'rotulo' de tipo 'string'
function imprimirEtiqueta( etiqueta: { rotulo: string } ) {
  console .log( 'Rotulo: ', etiqueta .rotulo );
}

// Define un objeto
let etiqueta = {
  tamanio: 10,
  rotulo: 'Objeto de tamaño 10'
}

// Ejecuta la función y se le pasa un objeto con las características mínimas que exije la misma
imprimirEtiqueta( etiqueta );
