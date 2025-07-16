
const express = require('express');
const router = express.Router();
const juegoController = require('../controllers/juegoController');

// Crear un nuevo juego
router.post('/', juegoController.CrearJuego);

// Obtener todos los juegos
router.get('/', juegoController.ObtenerJuegos);

// Obtener un juego por ID
router.get('/:id', juegoController.ObtenerUnJuego);

// Actualizar un juego por ID
router.put('/:id', juegoController.ActualizarJuegoPorId);

// Eliminar un juego por ID
router.delete('/:id', juegoController.EliminarJuegoPorId);


// Calificar juego
router.patch('/:id/calificacion', juegoController.ActualizarCalificacionDelJuego);

// Filtrar por plataforma
router.get('/plataforma/:plataforma', juegoController.ObtenerJuegosPorPlataforma);

// Filtrar por género
router.get('/genero/:genero', juegoController.ObtenerJuegosPorGenero);

//Cambiar el estado de los juegos
router.patch("/:id/estado", juegoController.ActualizarEstado);
 

module.exports = router;


