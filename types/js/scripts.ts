/* Types: Indexable Types
 * Las interfaces pemiten describir los tipos de funciones de un Objeto */

/* Crea 'Interface' que índica que cuando un dato sea agregado usando la 'Interface'
 * se indexa con un número y devolverá una cadena */
interface Lista {
    [ indice: number ] : string;  /* Firma de índice (describe los tipos que podemos usar
                                   * para indexar en el objeto, junto con los tipos de devolución) */
}

let lista : Lista;    // Crea una variable del tipo de la 'Interface'
lista = [ 'Juan', 'Jiménez' ];

let nombre : string = lista[ 0 ],
    apellido : string = lista[ 1 ];

console .log( 'Nombre ', nombre );
console .log( 'Apellido ', apellido );
