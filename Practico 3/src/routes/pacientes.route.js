const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const rutaPacientes = Router();
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/login',pacientesController.login)
rutaPacientes.post('/',verifyTokenMiddleware,pacientesController.create);
rutaPacientes.put('/:id',verifyTokenMiddleware,pacientesController.update);
rutaPacientes.delete('/:id',verifyTokenMiddleware,pacientesController.delete);

//Otras rutas CRUD AGREGADO
rutaPacientes.get('/turnos/:idPaciente', verifyTokenMiddleware, pacientesController.turnosPorPaciente);
rutaPacientes.delete('/turnos/:idTurno', verifyTokenMiddleware, pacientesController.cancelarTurno);

module.exports = rutaPacientes;