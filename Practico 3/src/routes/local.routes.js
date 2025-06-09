const express = require('express');
const router = express.Router();
const localTurnosController = require('../controllers/home/local.turnos.controller');

router.get('/turnos', localTurnosController.listarTurnos);
router.get('/turnos/nuevo', localTurnosController.formularioNuevoTurno);
router.post('/turnos/nuevo', localTurnosController.guardarNuevoTurno);
router.post('/turnos/:id/eliminar', localTurnosController.eliminarTurno);

router.delete('/paciente/eliminar/:idPaciente', localTurnosController.deletePaciente);

router.get('/paciente/eliminar', (req, res) => {
  res.render('eliminarPaciente', { error: null, success: null });
});

router.post('/paciente/eliminar', async (req, res) => {
  const id = req.body.idPaciente;
  try {
    await localTurnosController.deletePaciente({ params: { id } }, res);
    res.render('eliminarPaciente', { error: null, success: 'Paciente eliminado correctamente' });
  } catch (error) {
    res.render('eliminarPaciente', { error: error.message, success: null });
  }
});


module.exports = router;