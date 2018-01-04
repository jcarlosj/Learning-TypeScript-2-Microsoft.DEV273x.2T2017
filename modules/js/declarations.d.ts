/* Declaraciones
 * Se utilizan para describir el código que existe en cualquier otro lugar
 * (javascript, coffeescript o nodejs). EL objetivo de esto es poder usar
 * este código en aplicaciones TypeScript in tener que volver a escribir el
 * código TS. Se recomienda que las declaraciones se tengan en archivos separados
 * de extensión <nombre-archivo>.d.ts */

declare var mynumber : any;
mynumber = 200;         // Ok

/* Si un archivo tiene la extensión [.d.ts] cada definición de nivel raíz debe tener
 * la palabra prefijada 'declare'. Esto le dice al desarrollador que no habrá
 * ningún código emitido por TypeScript. El desarrollador debe asegurarse de que el
 * elemento declarado existirá en tiempo de ejecución */
