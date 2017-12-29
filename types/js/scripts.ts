/* Types: Classes
 * Las clases abstractas son clases base de las cuales pueden derivarse otras clases
 * No pueden ser instanciados directamente. A diferencia de una interfaz, una clase
 * abstracta puede contener detalles de implementación para sus miembros. La palabra
 * clave 'abstract' se usa para definir estas clases, así como también los métodos
 * dentro de la misma */

/* Definición de la clase abstracta */
abstract class Departamento {
  /* Atributos o propiedades */
  nombre: string;
  /* Constructor */
  public constructor( nombreDelDepartamento : string ) {
    this .nombre = nombreDelDepartamento;
  }
  /* Métodos */
  public imprimirNombre() : void {
    console .log( 'Departamento de: ', this .nombre );
  }

  abstract imprimirReunion() : void;    // Debe ser implementados en las clases derivadas
}

/* Definición de una clase que hereda de una clase abstracta */
class DepartamentoContable extends Departamento {
  /* Constructor */
  public constructor() {
    super( 'Contabilidad y auditoría' );    // Constructores en clases derivadas deben llamar a super
  }
  /* Métodos */
  public imprimirReunion() : void {
    console .log( 'Este departamento se reúne todos los lunes a las 10am' );
  }
  public generarReportes() : void {
    console .log( 'Generación de informes contables' );
  }
}

/* Crea referencia a una clase de tipo abstracto */
let departamento: Departamento;
/* ERRORES que no se deben cometer */
// departamento1 = new Departamento();  // No se puede crear una instancia a partir de una clase abstracta
// departamento .generarReportes();     // Este método no esta declarado como abstracto por lo que no se considera existente

//departamento .imprimirNombre();
// departamento .imprimirReunion();     // Este método no esta declarado como abstracto por lo que no se considera existente

/* Crea Instancia apartir de una clase que hereda de una clase abstracta */
let departamento2 = new DepartamentoContable();
departamento2 .imprimirNombre();
departamento2 .imprimirReunion();
