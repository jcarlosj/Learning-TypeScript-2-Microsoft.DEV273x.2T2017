/* Types: Funciones y tipo de funciones */
/* Funcion nombrada */
function add_1(num1, num2) {
    return num1 + num2;
}
/* Funcion Anónima */
var add_2 = function (num1, num2) {
    return num1 + num2;
};
console.log('Funcion nombrada : ', add_1(2, 3));
console.log('Funcion anónima : ', add_2(2, 3));
/* Las mismas funcion escrita con la sintaxis de funciones flecha */
var add_3 = function (num1, num2) {
    return num1 + num2;
};
console.log('Otra Funcion ', add_3(2, 3));
/* Mientras los tipos de parámetro se alinien, se considera un tipo válido
   para la función, independiente de los nombres que le dé a los parámetros
   en el tipo de función */
var add_4 = function (numero1, numero2) {
    return numero1 + numero2;
};
console.log('Otra Funcion (nombres diferentes)', add_4(2, 3));
