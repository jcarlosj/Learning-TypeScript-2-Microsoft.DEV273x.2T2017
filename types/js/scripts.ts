/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

/* Definición de la clase sin 'Accessors' (Getters & Setters) */
class Empleado {
  /* Atributos o propiedades */
  nombre_completo : string;
}

let empleado = new Empleado();
empleado .nombre_completo = 'Jorge Robles';

if( empleado .nombre_completo ) {
  console .log( 'Nombre: ', empleado .nombre_completo );
}
