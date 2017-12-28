/* Types: Function Types
 * Las interfaces pemiten describir los tipos de funciones de un Objeto */
/* Crea una variable del tipo de la 'Interface' */
var busqueda;
/* Le asignamos una funcion con los parametros definidos */
busqueda = function (fuente, subcadena) {
    var resultado = fuente.search(subcadena);
    return resultado > -1;
};
/* Resultado */
console.log('busqueda ', busqueda);
