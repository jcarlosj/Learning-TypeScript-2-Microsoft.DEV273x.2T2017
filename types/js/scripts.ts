
/* Types:
 * Como declarar variales y constantes en TypeScript
 */

// var, let y const en TypeScript
 var saludo: string = 'Hola!';
 let cantidad : number = 50;
 const PI: number = 3.1415926535;

 console .group( 'FUERA del BLOQUE (ANTES)' );
   console .log( 'saludo ', saludo );             // 'Hola!'
   console .log( 'cantidad ', cantidad );         // 50
   console .log( 'PI ', PI );                     // 3.1415926535
 console .groupEnd();

/* Bloque de Código */
{
  var saludo = 'Haciendo algo!';
  let cantidad = 17.9;
  const PI = 3.1415;

  console .group( 'DENTRO del BLOQUE' );
    console .log( 'saludo ', saludo );          // 'Haciendo algo!'
    console .log( 'cantidad ', cantidad );      // 17.9
    console .log( 'PI ', PI );                  // 3.1415
  console .groupEnd();
}

console .group( 'FUERA del BLOQUE (DESPUÉS)' );
  console .log( 'saludo ', saludo );              // 'Haciendo algo!'
  console .log( 'cantidad ', cantidad );          // 50
  console .log( 'PI ', PI );                      // 3.1415926535
console .groupEnd();
