const { Router } = require("express");
const { home } = require("../controllers/home/home.controller.js");

const rutaHome = Router();
rutaHome.get("/", home);

const {
  listarPacientesVista,
} = require("../controllers/home/local.pacientes.controller");
rutaHome.get("/pacientes", listarPacientesVista);
module.exports = rutaHome;
