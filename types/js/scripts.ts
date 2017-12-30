/* Types: Inferencia de compatibilidad */

/* Interencia de tipos por el contenido de las variables */
let mensaje = 'Hola esta es una cadena de texto',   // Infiere que es String
    edad = 50,                                      // Infiere que es number
    unArregloDeNumeros = [ 1, 2, null ];

/* Inferencia de Arserción */
let tipoSinDeclarar : any = 'Esta es otra cadena de texto';
console .log( '# ', ( tipoSinDeclarar as string ) .length );
console .log( '# ', ( <string> tipoSinDeclarar ) .length );

/* Interface */
interface descripcionCuadrado {
  'nombre' : string;
  'tamanio' : number;
}

/* Crea método aceptando Interfaces */
let cuadradoFn: Function = ( cuadrado : descripcionCuadrado ) => {
  return cuadrado .nombre;
}

let cuadrado = {
  nombre : 'Un cuadrado',
  tamanio : 20
}

let executeFn = cuadradoFn( cuadrado );

/* Implementar una Interface que usa una clase */
class cuadradoClass implements descripcionCuadrado {
  nombre : string = 'Un cuadrado';
  tamanio : number = 10;
}

/**/
let cuadrado2 : descripcionCuadrado;
let cuadradoFalso = {
  'tamanio' : 'Una cadena',
  'nombre' : 20
};

// cuadrado2 = cuadradoFalso;   // ERROR no se puede asignar 
