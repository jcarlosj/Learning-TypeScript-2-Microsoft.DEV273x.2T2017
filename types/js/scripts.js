/* Types: Comparación de funciones
   Hay que tener en cuenta que para dicha comparación no se tienen en cuenta
   los nombres de los parámetros si no sus tipos*/
var items = [1, 2, 3];
//items .forEach( ( item, index, array ) => console .log( item ) );   // No encuentra items
items.forEach(function (item) { return console.log(item); }); // 1, 2, 3  (Forma correcta)
/* Ahora veamos como se tratan los tipos de devolución , utilizando dos funciones
   que difieren solo por su tipo de devolución */
var primeraFuncion = function () { return ({ nombre: 'Alicia' }); }, segundaFuncion = function () { return ({ nombre: 'Alicia', localizacion: 'Cartagena' }); };
console.group('Antes de asignar segundaFuncion = primeraFuncion;');
console.log('primeraFuncion ', primeraFuncion);
console.log('segundaFuncion ', segundaFuncion);
console.groupEnd();
primeraFuncion = segundaFuncion; // Se asigna con exito
//segundaFuncion = primeraFuncion;  // ERROR por que primeraFuncion carece de la propiedad localizacion
console.group('Después de asignar segundaFuncion = primeraFuncion;');
console.log('primeraFuncion ', primeraFuncion);
console.log('segundaFuncion ', segundaFuncion);
console.groupEnd();
/* NOTA: El sistema de tipo impone que el tipo de devolución de la función de origen
         sea un subtipo del tipo de devolución del tipo de destino */
