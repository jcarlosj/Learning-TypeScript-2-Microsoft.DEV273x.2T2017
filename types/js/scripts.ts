/* Types: Readonly properties */

let a: number[] = [1, 2, 3, 4];
let b: number[] = [7, 8, 9, 0];

let ro: ReadonlyArray<number> = a;

console .log( 'let a: number[] = [1, 2, 3, 4]; ... ', a );
console .log( 'let b: number[] = [7, 8, 9, 0]; ... ', b );

console .group( 'ReadonlyArray<number>' );
  console .log( '------------------------------------' );
  console .log( '*let ro: ReadonlyArray<number> = a; ... ', ro );
console .groupEnd();

/* Los siguientes ejemplos generarán errores pues no se les puede Asignar valores
   a variables designadas como de solo lectura

ro[0] = 12;         // ERROR!
ro.push(5);         // ERROR!
ro.length = 100;    // ERROR!
a = ro;             // ERROR!
*/

// EXCEPCIÓN: Usamos una aserción de tipo pára anular la propiedad de solo escritura
a = ro as number[];
b = ( <number[]> ro );

console .group( 'Anulacion "readonly" usando un "Type Assertion"' );
  console .log( 'a = ro as number[]; ... ', a );
  console .log( 'b = <number[]> ro; ... ', b );
console .groupEnd();
