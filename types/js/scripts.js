/* Types: Comparación de funciones
   Hay que tener en cuenta que para dicha comparación no se tienen en cuenta
   los nombres de los parámetros si no sus tipos*/
/* Define dos Functions Arrow */
var primeraFuncion = function (numero1) { return 0; }, segundaFuncion = function (numero2, cadena1) { return 0; };
console.group('Antes de asignar la segundaFuncion = primeraFuncion;');
console.log('primeraFuncion ', primeraFuncion);
console.log('segundaFuncion ', segundaFuncion);
console.groupEnd();
segundaFuncion = primeraFuncion; // Funcionaría perfectamente
//primeraFuncion = segundaFuncion;  // Al contrario generaría un ERROR puesto
// que aunque el primer parámetro es compatible
// exige un segundo parámetro que es obligatorio
console.group('Después de asignar la segundaFuncion = primeraFuncion;');
console.log('primeraFuncion ', primeraFuncion);
console.log('segundaFuncion ', segundaFuncion);
console.groupEnd();
