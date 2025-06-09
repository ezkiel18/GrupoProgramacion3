const Identificador = require("./identificador.entity");

class Turno extends Identificador{
  constructor(id=0,idPaciente, fecha, descripcion) {
    super(id);
    this.idPaciente = idPaciente;
    this.fecha = fecha;
    this.descripcion = descripcion;
  }
}

module.exports = Turno;

