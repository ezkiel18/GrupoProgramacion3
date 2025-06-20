const express = require("express");
const router = express.Router();

const localTurnosController = require("../controllers/home/local.turnos.controller");
const pacientesVistaController = require("../controllers/home/local.pacientes.controller");

router.get("/turnos", localTurnosController.listarTurnos);
router.get("/turnos/nuevo", localTurnosController.formularioNuevoTurno);
router.post("/turnos/nuevo", localTurnosController.guardarNuevoTurno);
router.post("/turnos/:id/eliminar", localTurnosController.eliminarTurno);

router.get(
  "/paciente/eliminar",
  pacientesVistaController.eliminarPacienteVista
);
router.post(
  "/paciente/eliminar",
  pacientesVistaController.procesarEliminarPacienteVista
);

module.exports = router;
