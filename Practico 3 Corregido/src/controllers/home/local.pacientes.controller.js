const pacientesModel = require("../../models/mock/pacientes.models");
const turnosModel = require("../../models/mock/turnos.models");

const listarPacientesVista = async (req, res) => {
  try {
    const pacientes = await pacientesModel.list();
    res.render("pacientes", { pacientes });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar los pacientes");
  }
};

const eliminarPacienteVista = (req, res) => {
  res.render("eliminarPaciente", { error: null, success: null });
};

const procesarEliminarPacienteVista = async (req, res) => {
  const id = req.body.idPaciente;

  try {
    const pacienteBorrado = await pacientesModel.delete(id);
    await turnosModel.deleteTurnosPorPaciente(id);

    res.render("mensaje", {
      message: "El paciente y los turnos están eliminados",
      paciente: pacienteBorrado,
    });
  } catch (error) {
    res.render("eliminarPaciente", {
      error: error.message,
      success: null,
    });
  }
};

module.exports = {
  listarPacientesVista,
  eliminarPacienteVista,
  procesarEliminarPacienteVista,
};
