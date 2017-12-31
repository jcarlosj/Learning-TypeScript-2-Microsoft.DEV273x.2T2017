/* Types: Funciones y tipo de funciones */

/* Funcion nombrada */
function add_1( num1: number, num2: number ) : number {
  return num1 + num2;
}

/* Funcion Anónima */
let add_2 = function( num1: number, num2: number ) : number {
  return num1 + num2;
}

console .log( 'Funcion nombrada : ', add_1( 2, 3 ) );
console .log( 'Funcion anónima : ', add_2( 2, 3 ) );

/* Las mismas funcion escrita con la sintaxis de funciones flecha */
let add_3: ( num1: number, num2: number ) =>
  number = function ( num1 : number, num2 : number) : number {
    return num1 + num2;
  }

console .log( 'Otra Funcion ', add_3( 2, 3 ) );

/* Mientras los tipos de parámetro se alinien, se considera un tipo válido
   para la función, independiente de los nombres que le dé a los parámetros
   en el tipo de función */

let add_4: ( num1: number, num2: number ) =>
 number = function ( numero1 : number, numero2 : number) : number {
   return numero1 + numero2;
 }

console .log( 'Otra Funcion (nombres diferentes)', add_4( 2, 3 ) );
