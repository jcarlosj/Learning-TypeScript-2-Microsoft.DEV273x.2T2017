/* Types: Cualquier tipo */

/* Types: Assertions
 * Una aserción de tipo es como un tipo de conversión. No tiene impacto
   en tiempo de ejecución y lo usa exclusivamente TypeScript Se usan los
    angulares (angle-bracket) para indicar la aserción de tipo
 * "Creeme que sé lo que estoy haciendo o yo sé que es eso" */

let algunValor : any = "Esta es una cadena de texto";
let cantidadCaracteres_1 : number = ( <string> algunValor ) .length;    // Forma 1
let cantidadCaracteres_2 : number = ( algunValor as string ) .length;   // Forma 2

console .group( 'Type Assertions' );
  console .log( 'cantidadCaracteres_1 ', cantidadCaracteres_1 );
  console .log( 'cantidadCaracteres_2 ', cantidadCaracteres_2 );
console .groupEnd();
