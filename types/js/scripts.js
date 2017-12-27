/* Types:
 * Como declarar variales y constantes en TypeScript
 */
// var, let y const en TypeScript
var saludo = 'Hola!';
var cantidad = 50;
var PI = 3.1415926535;
console.group('FUERA del BLOQUE (ANTES)');
console.log('saludo ', saludo); // 'Hola!'
console.log('cantidad ', cantidad); // 50
console.log('PI ', PI); // 3.1415926535
console.groupEnd();
/* Bloque de Código */
{
    var saludo = 'Haciendo algo!';
    var cantidad_1 = 17.9;
    var PI_1 = 3.1415;
    console.group('DENTRO del BLOQUE');
    console.log('saludo ', saludo); // 'Haciendo algo!'
    console.log('cantidad ', cantidad_1); // 17.9
    console.log('PI ', PI_1); // 3.1415
    console.groupEnd();
}
console.group('FUERA del BLOQUE (DESPUÉS)');
console.log('saludo ', saludo); // 'Haciendo algo!'
console.log('cantidad ', cantidad); // 50
console.log('PI ', PI); // 3.1415926535
console.groupEnd();
