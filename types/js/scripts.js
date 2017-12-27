/* Types: Tipos Básicos */
var unBoleano = false; // Boolean Type
var unEntero = 9; // Number Type (entero)
var unDecimal = 2.9; // Number Type (decimal)
var unHexadecimal = 0xf00d; // Number Type (hexadecimal)
var unOctal = 484; // Number Type (octal)
var unBinario = 10; // Number Type (binario)
var unaCadena = 'Me gusta el color azul'; // String Type
var primerArregloNumeros = [1, 2, 3]; // Array Number Type
var segundoArregloNumeros = [4.6, 5.5, 6.4]; // Array Number Type
/* Funciona igual para los otros tipos incluido del dinámico 'any' */
var unaTupla = ['nombre', 'Juan Carlos']; // Tuple [ string type, string type ]
var Color;
(function (Color) {
})(Color || (Color = {}));
{
    Rojo = 1,
        Verde = 2,
        Azul = 4;
}
var color1 = Color.Verde; //
var color2 = Color[2]; // Azul
var unNulo = null;
var unIndefinido = undefined;
var primerVacio = null;
var segundoVacio = undefined;
console.group('Boolean');
console.log('unBoleano ', unBoleano);
console.groupEnd();
console.group('String');
console.log('unEntero ', unEntero);
console.log('unDecimal ', unDecimal);
console.log('unHexadecimal ', unHexadecimal);
console.log('unOctal ', unOctal);
console.log('unBinario ', unBinario);
console.groupEnd();
console.group('String');
console.log('unaCadena ', unaCadena);
console.groupEnd();
console.group('Array<number>');
console.log('primerArregloNumeros ', primerArregloNumeros);
console.log('segundoArregloNumeros ', segundoArregloNumeros);
console.groupEnd();
console.group('tuple [ string string ]');
console.log('unaTupla ', unaTupla);
console.groupEnd();
console.group('enum');
console.log('color1 ', color1);
console.log('color2 ', color2);
console.groupEnd();
console.group('null, undefined, void');
console.log('unNulo ', unNulo);
console.log('unIndefinido ', unIndefinido);
console.log('primerVacio ', primerVacio);
console.log('segundoVacio ', segundoVacio);
console.groupEnd();
