/* Hacemos la referencía al archivo donde lo requerimos */
/// <reference path="declaraciones.d.ts" />

/* Todas las importaciones de un módulo abreviado tendrán el tipo 'any' */
import x, { y } from 'new-module';
x( y );
