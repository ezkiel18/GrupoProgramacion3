const pacientesModel = require("./../../models/mock/pacientes.models.js");
const turnosModel = require("./../../models/mock/turnos.models.js");
const Paciente = require("./../../models/mock/entities/paciente.entity.js");
const Joi = require("joi");

class PacientesController {
  async login(req, res) {
    try {
      const schema = Joi.object({
        email: Joi.string()
          .email({ minDomainSegments: 2 })
          .required()
          .messages({
            "string.empty": "El email no puede quedar vacío",
            "any.required": "El email es requerido",
            "string.email": "El formato de email es incorrecto",
          }),
        password: Joi.string().min(8).required().messages({
          "string.empty": "La contraseña no puede quedar vacía",
          "any.required": "La contraseña es requerida",
        }),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        return res
          .status(400)
          .json({ message: `Datos invalidos: ${error.details[0].message}` });
      }

      const { email, password } = req.body;

      const token = await pacientesModel.validate(email, password);

      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async list(req, res) {
    res.status(200).json(await pacientesModel.list());
  }
  async create(req, res) {
    const { dni, nombre, apellido, email } = req.body;

    const nuevoPaciente = new Paciente(dni, nombre, apellido, email);

    const info = await pacientesModel.create(nuevoPaciente);
    res.status(200).json(info);
  }
  delete(req, res) {
    const id = req.params.id;

    const pacienteBorrado = pacientesModel.delete(id);
    pacienteBorrado
      .then((paciente) => {
        res.status(200).json(paciente);
      })
      .catch((error) => {
        res
          .status(404)
          .json({ message: `no existe el paciente conh el id:${id}`, error });
      });
  }
  update(req, res) {
    const id = req.params.id;
    const { dni, nombre, apellido, email } = req.body;
    const nuevoPaciente = new Paciente(dni, nombre, apellido, email);
    pacientesModel.update(id, nuevoPaciente);
    res.status(200).json({ message: "actualizado" });
  }

  async turnosPorPaciente(req, res) {
    try {
      const idPaciente = req.params.idPaciente;
      const turnos = await turnosModel.getTurnosPorPaciente(idPaciente);
      res.status(200).json(turnos);
    } catch (error) {
      res.status(404).json({ message: "Error al obtener los turnos", error });
    }
  }

  async cancelarTurno(req, res) {
    try {
      const idTurno = req.params.idTurno;
      await turnosModel.delete(idTurno);
      res.status(200).json({ message: `Turno ${idTurno} cancelado con éxito` });
    } catch (error) {
      res
        .status(404)
        .json({ message: `No se pudo cancelar el turno ${idTurno}`, error });
    }
  }
}

module.exports = new PacientesController();
