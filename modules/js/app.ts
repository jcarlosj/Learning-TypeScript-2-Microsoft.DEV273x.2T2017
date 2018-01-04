/* Hacemos la referencía al archivo donde lo requerimos */
/// <reference path="node.d.ts" />

/* Ahora podemos cargar los módulos */
import * as URL from 'url';       // Forma 1
//import URL = require( 'url' );    // Forma 2 (No ambas)

let MyUrl = URL .parse( 'http://www.typescriptlang.org' );
