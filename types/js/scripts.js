/* Types: Classes
 * Las clases abstractas son clases base de las cuales pueden derivarse otras clases
 * No pueden ser instanciados directamente. A diferencia de una interfaz, una clase
 * abstracta puede contener detalles de implementación para sus miembros. La palabra
 * clave 'abstract' se usa para definir estas clases, así como también los métodos
 * dentro de la misma */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Definición de la clase abstracta */
var Departamento = /** @class */ (function () {
    /* Constructor */
    function Departamento(nombreDelDepartamento) {
        this.nombre = nombreDelDepartamento;
    }
    /* Métodos */
    Departamento.prototype.imprimirNombre = function () {
        console.log('Departamento de: ', this.nombre);
    };
    return Departamento;
}());
/* Definición de una clase que hereda de una clase abstracta */
var DepartamentoContable = /** @class */ (function (_super) {
    __extends(DepartamentoContable, _super);
    /* Constructor */
    function DepartamentoContable() {
        return _super.call(this, 'Contabilidad y auditoría') || this;
    }
    /* Métodos */
    DepartamentoContable.prototype.imprimirReunion = function () {
        console.log('Este departamento se reúne todos los lunes a las 10am');
    };
    DepartamentoContable.prototype.generarReportes = function () {
        console.log('Generación de informes contables');
    };
    return DepartamentoContable;
}(Departamento));
/* Crea referencia a una clase de tipo abstracto */
var departamento;
/* ERRORES que no se deben cometer */
// departamento1 = new Departamento();  // No se puede crear una instancia a partir de una clase abstracta
// departamento .generarReportes();     // Este método no esta declarado como abstracto por lo que no se considera existente
//departamento .imprimirNombre();
// departamento .imprimirReunion();     // Este método no esta declarado como abstracto por lo que no se considera existente
/* Crea Instancia apartir de una clase que hereda de una clase abstracta */
var departamento2 = new DepartamentoContable();
departamento2.imprimirNombre();
departamento2.imprimirReunion();
