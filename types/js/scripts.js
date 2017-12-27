/* Types:
 * Ejemplo: Problema que supone mapear y extraer valores de un
 *          Array dinámico en JavaScript
 */
/* Array de tipos dinámicos */
var numArray = [
    1,
    2,
    'interrupting cow',
    {
        index: 3,
        title: 'interrupting cow'
    }
];
/* Función para agregar un 1 a la cuenta */
var add1 = function (num) { return 1 + num; };
/* Mapeo de datos */
numArray.map(function (item) {
    console.log('numArray[ ' + item + ' ]', add1(item));
    return item;
});
console.log('Array Mapeado ', numArray.map(function (item) {
    add1(item);
    return item;
}));
