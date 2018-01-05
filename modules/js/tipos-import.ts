/* Tipos de Import (Ejemplos) */

/* Importación Relativa
 * comienzan por:   /, ./, ../
 * Se resuelve en relación con el archivo de importación y no puede
 * resolverse en una declaración de modulo ambiental. Debería usar importaciones
 * relativas para suspropios módulos que garanticen manterne su ubicación relativa
 * en tiempo de ejecución */
 import Entry from './components/Entry';
 import { DefaulHeaders } from '../constants/http';
 import '/mod';

 /* Importación NO relativa
  * Una importación NO relativa se puede resolver en relación con el 'baseUrl', o
  * a través del mapeo de ruta. También pueden resolver declaraciones ambientales
  * de módulos. Use rutas NO relativas al importar cualquiera de sus dependencias externas */
 import * as $ from 'jquery';                   /* jQuery dependencia externa */
 import { Component } from '@angular/core';     /* Componentes del nucleo de Angular */
