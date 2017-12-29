/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

/* Definición de la clase sin 'Accessors' (Getters & Setters) */
let codigoSecreto = '12345';

class Empleado {
  /* Atributos o propiedades */
  private _nombrecompleto : string;

  /* Métodos 'Accessors' (Accesorios) */
  get nombreCompleto() : string {
    return this ._nombrecompleto;
  }
  set nombreCompleto( nuevonombre: string ) {
    if( codigoSecreto && codigoSecreto == '12345' ) {
        this ._nombrecompleto = nuevonombre;
    }
    else {
      console .log( 'ERROR: No esta autorizado a realizar cambios' );
    }

  }

}

let empleado = new Empleado();
empleado .nombreCompleto = 'Jorge Robles';

if( empleado .nombreCompleto ) {
  console .log( 'Nombre: ', empleado .nombreCompleto );
}
