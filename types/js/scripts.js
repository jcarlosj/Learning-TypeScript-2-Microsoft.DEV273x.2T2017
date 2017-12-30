/* Types: Compatibilidad estructural */
var persona1, persona2 = { nombre: 'Alicia', localizacion: 'Barranquilla' };
console.group('Antes de asignar persona1 = persona2;');
console.log('persona1 ', persona1);
console.log('persona2 ', persona2);
console.groupEnd();
persona1 = persona2; /* Para que esta asignación sea posible el compilador
                         verifica que cada propiedad de 'persona1' para que
                         pueda encontrar una propiedad compatible correspondiente
                         en 'persona2' si la encuentra entonces la asignación
                         está permitida */
console.group('Después de asignar persona1 = persona2;');
console.log('persona1 ', persona1);
console.log('persona2 ', persona2);
console.groupEnd();
