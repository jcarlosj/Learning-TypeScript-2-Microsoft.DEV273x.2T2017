/* Hacemos una declaración del fichero JavaScript
 * Con esto podrá usar en TypeScript la función JavaScript sin errores de compilación
  * por ejemplo al intentar pasarle 2 argumentos en lugar de 1 */
declare function showMessage( message : string );

/* NOTA: Todo lo permitido en un archivo [.d.ts] puede aparecer en un archivo [.ts]
 *       pero no al revés. Un archivo [.d.ts] puede contener código TypeScript que
 *       no genere código JavaScript en la salida. Las 'Interface' están permitidas
 *       por que desaparecen por completo después de la compilación. Las enumeraciones
 *       de const están permitidas a diferencia de las enumeraciones ordinarias que
 *       generan un objeto en el JavaScript de salida. Las clases de nivel superior,
 *       las variables, los modulos y las funciones deben tener un prefijo 'declare'
 *       Es una práctiva común ver un nivel superior 'declare module' y luego todas
 *       las definiciones dentro de él, son por lo tanto también, una declaración.
 *       Ejemplo: */

declare module AlgunaCosa {
  var x;
}
