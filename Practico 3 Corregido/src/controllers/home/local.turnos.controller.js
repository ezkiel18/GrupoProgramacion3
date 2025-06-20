const turnosModel = require("../../models/mock/turnos.models");
const pacientesModel = require("../../models/mock/pacientes.models");

module.exports = {
  listarTurnos: async (req, res) => {
    const turnos = await turnosModel.getAll();
    res.render("turnos", { turnos });
  },

  formularioNuevoTurno: (req, res) => {
    res.render("formNuevoTurno");
  },

  guardarNuevoTurno: async (req, res) => {
    const { idPaciente, fechaHora, motivo } = req.body;
    const paciente = await pacientesModel.getPacienteById(parseInt(idPaciente));

    if (!paciente) {
      return res.status(400).send("El paciente con ese ID no existe");
    }

    const nuevoId = turnosModel.data.length + 1;
    const nuevoTurno = {
      id: nuevoId,
      idPaciente: parseInt(idPaciente),
      fecha: fechaHora,
      descripcion: motivo,
    };
    turnosModel.data.push(nuevoTurno);
    res.redirect("/turnos");
  },

  eliminarTurno: async (req, res) => {
    await turnosModel.delete(req.params.id);
    res.redirect("/turnos");
  },
};
