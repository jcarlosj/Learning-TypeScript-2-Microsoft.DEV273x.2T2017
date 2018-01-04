import validator from './ZipCodeValidator';

let myValidator = new validator();

/* StaticZipCodeValidator */
import validate from './StaticZipCodeValidator';

let strings = [ 'Hello', '98052', '101' ];

//* Usa la función validar
strings .forEach( s => {
  console .log( `'${ s }' ${ validate( s ) ? ' matches ' : ' does not match' }` );
});
