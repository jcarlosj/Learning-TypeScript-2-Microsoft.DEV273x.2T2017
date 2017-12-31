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
