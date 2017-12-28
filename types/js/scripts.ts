/* Types: Function Types
 * Las interfaces pemiten describir los tipos de funciones de un Objeto */

/* Crea 'Interface' */
interface Buscar {
 ( fuente: string, subcadena: string ) : boolean;   // Firma de llamada: lista de parámetros que requiere (nombres y tipos)
}

/* Crea una variable del tipo de la 'Interface' */
let busqueda: Buscar;

/* Le asignamos una funcion con los parametros definidos */
busqueda = function( fuente, subcadena ) {
  let resultado = fuente .search( subcadena );
  return resultado > -1;
}

/* Resultado */
console .log( 'busqueda ', busqueda );
