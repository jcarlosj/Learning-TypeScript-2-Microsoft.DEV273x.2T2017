/* Types: Tipos Básicos */

let unBoleano : boolean = false;    // Boolean Type

let unEntero : number = 9;          // Number Type (entero)
let unDecimal : number = 2.9;       // Number Type (decimal)

let unHexadecimal : number = 0xf00d;  // Number Type (hexadecimal)
let unOctal : number = 0o744;         // Number Type (octal)
let unBinario : number = 0b1010;      // Number Type (binario)

let unaCadena : string = 'Me gusta el color azul';   // String Type

let primerArregloNumeros : number[] = [ 1, 2 ,3 ];              // Array Number Type
let segundoArregloNumeros : Array<number> = [ 4.6, 5.5, 6.4 ];  // Array Number Type
/* Funciona igual para los otros tipos incluido del dinámico 'any' */

let unaTupla : [ string, string ] = [ 'nombre', 'Juan Carlos' ];  // Tuple [ string type, string type ]

enum Color = {    // Enum Type
  Rojo = 1,
  Verde = 2,
  Azul = 4
}
let color1: Color = Color.Verde;    //
let color2: Color = Color[ 2 ];     // Azul

let unNulo : null = null;
let unIndefinido : undefined = undefined;
let primerVacio : null = null;
let segundoVacio : undefined = undefined;

console .group( 'Boolean' );
  console .log( 'unBoleano ', unBoleano );
console .groupEnd();

console .group( 'String' );
  console .log( 'unEntero ', unEntero );
  console .log( 'unDecimal ', unDecimal );
  console .log( 'unHexadecimal ', unHexadecimal );
  console .log( 'unOctal ', unOctal );
  console .log( 'unBinario ', unBinario );
console .groupEnd();

console .group( 'String' );
  console .log( 'unaCadena ', unaCadena );
console .groupEnd();

console .group( 'Array<number>' );
  console .log( 'primerArregloNumeros ', primerArregloNumeros );
  console .log( 'segundoArregloNumeros ', segundoArregloNumeros );
console .groupEnd();

console .group( 'tuple [ string string ]' );
  console .log( 'unaTupla ', unaTupla );
console .groupEnd();

console .group( 'enum' );
  console .log( 'color1 ', color1 );
  console .log( 'color2 ', color2 );
console .groupEnd();

console .group( 'null, undefined, void' );
  console .log( 'unNulo ', unNulo );
  console .log( 'unIndefinido ', unIndefinido );
  console .log( 'primerVacio ', primerVacio );
  console .log( 'segundoVacio ', segundoVacio );
console .groupEnd();
