const { Juego } = require('../models');

const CrearJuego = async (req, res) => {
  try {
    const nuevoJuego = await Juego.create(req.body);
    res.status(201).json(nuevoJuego);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const ObtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.findAll();
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const ObtenerUnJuego = async (req, res) => {
  try {
    const juego = await Juego.findByPk(req.params.id);
    if (!juego) return res.status(404).json({ mensaje: 'Juego no encontrado' });
    res.json(juego);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const ActualizarJuegoPorId = async (req, res) => {
  try {
    const [actualizado] = await Juego.update(req.body, { where: { id: req.params.id } });
    if (!actualizado) return res.status(404).json({ mensaje: 'Juego no encontrado' });
    const juegoActualizado = await Juego.findByPk(req.params.id);
    res.json(juegoActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const EliminarJuegoPorId = async (req, res) => {
  try {
    const eliminado = await Juego.destroy({ where: { id: req.params.id } });
    if (!eliminado) return res.status(404).json({ mensaje: 'Juego no encontrado' });
    res.json({ mensaje: 'Juego eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const ActualizarEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    console.log("🆔 ID recibido:", id);
    console.log("📦 Estado recibido:", estado);

    // Verificá si existe ese ID
    const juego = await Juego.findByPk(id);
    if (!juego) {
      console.log("⚠️ El juego con ese ID no existe.");
      return res.status(404).json({ mensaje: "Juego no encontrado" });
    }

    juego.estado = estado;
    await juego.save();

    console.log("✅ Estado actualizado en la base de datos.");
    res.json({ mensaje: "Estado actualizado correctamente" });
  } catch (err) {
    console.error("❌ Error al actualizar estado:", err);
    res.status(500).json({ error: err.message });
  }
};



const ActualizarCalificacionDelJuego = async (req, res) => {
  try {
    const { rating } = req.body;
    const [actualizado] = await Juego.update({ rating }, { where: { id: req.params.id } });
    if (!actualizado) return res.status(404).json({ mensaje: 'Juego no encontrado' });
    res.json({ mensaje: 'Calificación actualizada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const ObtenerJuegosPorPlataforma = async (req, res) => {
  try {
    const juegos = await Juego.findAll({ where: { platform: req.params.plataforma } });
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const ObtenerJuegosPorGenero = async (req, res) => {
  try {
    const juegos = await Juego.findAll({ where: { genre: req.params.genero } });
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  CrearJuego,
  ObtenerJuegos,
  ObtenerUnJuego,
  ActualizarJuegoPorId,
  EliminarJuegoPorId,
  ActualizarEstado,
  ActualizarCalificacionDelJuego,
  ObtenerJuegosPorPlataforma,
  ObtenerJuegosPorGenero
};
