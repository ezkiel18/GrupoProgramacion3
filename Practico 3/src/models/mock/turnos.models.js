const Turno = require("./entities/turno.entity");
class TurnosModel {
  constructor() {
    this.data = [];
    this.data.push(
    new Turno(1, 1, "2025-06-10T10:00:00", "Consulta general"),
    new Turno(2, 1, "2025-06-15T14:30:00", "Control de presion arterial"),
    new Turno(3, 2, "2025-06-12T09:00:00", "Consulta odontologica"),
    new Turno(4, 3, "2025-06-18T16:00:00", "Evaluación cardiologica")
    );
  }

  //obtiene todos los turnos de un paciente por su id
  getTurnosPorPaciente(idPaciente) {
    return new Promise((resolve, reject) => {
      try {
        const idNum = Number(idPaciente);
        const turnos = this.data.filter(t => t.idPaciente === idNum);
        resolve(turnos);
      } catch (error) {
        reject(error);
      }
    });
  }

  //elimina un turno por la id
  delete(idTurno) {
    return new Promise((resolve, reject) => {
      try {
        const turnoId = Number(idTurno);
        const index = this.data.findIndex(t => t.id === turnoId);
        if (index === -1) {
          throw new Error("Turno no encontrado");
        }
        const eliminado = this.data.splice(index, 1)[0];
        resolve(eliminado);
      } catch (error) {
        reject(error);
      }
    });
  }
  //obtiene todos los turnos
  getAll() 
  {
    return new Promise((resolve) => {
    resolve(this.data);
    });
  }
  
  //elimina todos los turnos de un paciente por su id
  deleteTurnosPorPaciente(idPaciente) {
  this.data = this.data.filter(t => t.idPaciente != idPaciente);
  }

}

module.exports = new TurnosModel();