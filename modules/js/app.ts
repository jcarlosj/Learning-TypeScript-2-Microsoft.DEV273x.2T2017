/* Hacemos la referencía al archivo donde lo requerimos */
/// <reference path="math-lib.d.ts" />

/* La biblioteca se puede usar como una importación dentro de los módulos */
import { isPrime } from 'math-lib';
isPrime( 2 );
//mathLib .isPrime( 2 );      // ERROR No puede usar la definición global desde dentro de un módulo

/* NOTA: También se puede usar como una variable global, pero solo debtro de una secuencia de comandos.
 *       (Un script es un archivo sin importaciones ni exportaciones) */
