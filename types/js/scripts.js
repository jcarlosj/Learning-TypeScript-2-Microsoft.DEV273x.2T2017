/* Types:
 * Como declarar variales y constantes en TypeScript
 */
/* Los tipos en JavaScript son dinámicos
 * por eso podemos asignar diferentes valores a una sola variable */
var variable_js;
console.group('En JavaScript ');
variable_js = 'Hola desde JavaScript';
console.log(variable_js); // JS lo interpreta como una cadena (string)
variable_js = 59430;
console.log(variable_js); // JS lo interpreta como un número entero
variable_js = ['Manzana', 13, 0.192, false];
console.log(variable_js); // JS lo interpreta como Array de valores de diferente tipo
variable_js = 23.1;
console.log(variable_js); // JS lo interpreta como un número decimal
variable_js = { nombre: 'Juan', edad: 40, profesion: 'Desarrollador' };
console.log(variable_js); // JS lo interpreta como un Objeto
variable_js = true;
console.log(variable_js); // JS lo interpreta como un valore booleano
console.groupEnd();
/* Los tipos en TypeScript son estáticos
 * por eso podemos NO asignar diferentes valores a una sola variable */
var saludo_ts;
var numero_ts;
var tupla_ts;
var numeros_ts;
var frutas_ts;
var verduras_ts;
var objeto_ts;
var boleano;
console.group('En TypeScript ');
saludo_ts = 'Hola desde TypeScript';
console.log(saludo_ts);
entero_ts = 59430;
console.log(entero_ts);
tupla_ts = ['manzanas', 32];
console.log(tupla_ts);
numeros_ts = [1, 0.9, 3.2, 10];
console.log(numeros_ts);
frutas_ts = ['Manzana', 'Mora', 'Mango'];
console.log(frutas_ts);
verduras_ts = ['Acelgas', 'Espinacas', 'Apio'];
console.log(verduras_ts);
numero_ts = 23.1;
console.log(numero_ts);
objeto_ts = { nombre: 'Juan', edad: 40, profesion: 'Desarrollador' };
console.log(objeto_ts);
boleano_ts = true;
console.log(boleano_ts);
console.groupEnd();
