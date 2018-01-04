/* Crea y exporta una clase */
export class ParseIntBasedZipCodeValidator {
  isAcceptable( s : string ) {
    return s .length === 5 && parseInt( s ) .toString() === s;
  }
}

/* Exporta el validador original pero lo a renombrado */
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator';
