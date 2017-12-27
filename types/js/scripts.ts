/* Types: Interfaces */

// Interface
interface ValorEtiquetado {
  rotulo: string;
}

// La función requiere como parámetro un objeto que tenga una 'Interface'
// con la estructura donde la propiedad de nombre 'rotulo' sea de tipo 'string'
function imprimirEtiqueta( etiqueta: ValorEtiquetado ) {
  console .log( 'Rotulo: ', etiqueta .rotulo );
}

// Define un objeto
let etiqueta = {
  tamanio: 10,
  rotulo: 'Objeto de tamaño 10'
}

// Ejecuta la función y se le pasa un objeto con las características mínimas que exije la misma
imprimirEtiqueta( etiqueta );
