/* Types: Compatibilidad estructural */

/* Definición de interface */
interface Mencionado {
  nombre : string;
}

let persona1: Mencionado,
    persona2 = { nombre: 'Alicia', localizacion: 'Barranquilla' };

/* La misma regla de asignación se usa cuando se verifican argumentos de llamada de función
   Este proceso de comparación se lleva acabo de forma recursiva, explorando el tipo de cada
   miembro y sub-miembro */
function saludar( persona : Mencionado ) {
  alert( 'Hola, ' + persona .nombre );
}

saludar( persona2 );

/* Resultado */
console .group( 'Antes de asignar persona1 = persona2;' );
  console .log( 'persona1 ', persona1 );
  console .log( 'persona2 ', persona2 );
console .groupEnd();

persona1 = persona2;  /* Para que esta asignación sea posible el compilador
                         verifica que cada propiedad de 'persona1' para que
                         pueda encontrar una propiedad compatible correspondiente
                         en 'persona2' si la encuentra entonces la asignación
                         está permitida */

console .group( 'Después de asignar persona1 = persona2;' );
  console .log( 'persona1 ', persona1 );
  console .log( 'persona2 ', persona2 );
console .groupEnd();
