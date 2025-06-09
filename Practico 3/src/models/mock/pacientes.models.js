const Persona = require("./../mock/entities/paciente.entity.js");
const Config = require("./../../config/config.js");
const jwt = require("jsonwebtoken");

class PacientesModel {
  constructor() {
    this.data = [];

    this.data.push(
      new Persona(
        "123456787",
        "Sergio",
        "Antozzi",
        "email@gmail.com",
        "12345",
        1
      )
    );

    this.data.push(
      new Persona(
        "46632789",
        "Ezequiel",
        "Barrionuevo",
        "ezequiel@gmail.com",
        "ezeprogra",
        2
      )
    );
    
    this.data.push(
      new Persona (
        "44128026",
        "Franco",
        "Cartagena",
        "Franco@gmail.com",
        "franprogra",
        3
      )
    )
    this.data.push(
      new Persona (
        "42350123",
        "Alex",
        "Rodriguez",
        "Alex@gmail.com",
        "alexprogra",
        4
      )
    )

    this.id = 3; 
  }

  // busca por email y contraseña
  findByEmail(email, password) {
    return new Promise((resolve, reject) => {
      try {
        const paciente = this.data.find(
          (p) => p.email === email && p.password === password
        );
        if (!paciente) {
          throw new Error("el paciente no existe");
        }
        resolve(paciente);
      } catch (error) {
        reject(error);
      }
    });
  }

  validate(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const userFound = await this.findByEmail(email, password);

        if (!userFound || userFound.password == null) {
          throw new Error("wrong email or password");
        }

        // payload, secreto, tiempo de expiración
        const payload = {
          userId: userFound.id,
          userEmail: userFound.email,
        };
        console.log("palabra secreta, pacientes model:", Config.secreteWord);

        const token = jwt.sign(payload, Config.secreteWord, {
          expiresIn: Config.expiresIn,
        });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  }

  // crea un dato nuevo (alta de cliente)
  create(paciente) {
    return new Promise((resolve, reject) => {
      try {
        paciente.id = this.id++;
        const pacienteEncontrado = this.data.find(
          (p) => p.email === paciente.email
        );
        if (!pacienteEncontrado) {
          this.data.push(paciente);
        } else {
          throw new Error("el paciente ya existe");
        }
        resolve(paciente);
      } catch (error) {
        reject(error);
      }
    });
  }

  // actualiza los datos del cliente con id = id
  update(id, paciente) {
    return new Promise((resolve, reject) => {
      try {
        const pacienteEncontrado = this.data.find((p) => p.id == id);
        if (!pacienteEncontrado) {
          throw new Error("No se encuentra el paciente");
        }
        pacienteEncontrado.dni = paciente.dni;
        pacienteEncontrado.email = paciente.email;
        pacienteEncontrado.nombre = paciente.nombre;
        pacienteEncontrado.apellido = paciente.apellido;
        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    });
  }

  // elimina el cliente con id = id
  delete(id) {
    return new Promise((resolve, reject) => {
      try {
        const pacienteEncontrado = this.data.find((p) => p.id == id);
        if (!pacienteEncontrado) {
          throw new Error("el id no es válido");
        }
        const pos = this.data.indexOf(pacienteEncontrado);
        this.data.splice(pos, 1); // elimina el elemento de la posición pos del arreglo
        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    });
  }

  // devuelve la lista completa en un arreglo de strings
  list() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }

  getPacienteById(id) {
    return new Promise((resolve, reject) => {
      try {
        const identificador = Number(id);
        const pacienteEncontrado = this.data.find(
          (paciente) => paciente.id === identificador
        );
        if (!pacienteEncontrado) {
          throw new Error("el id es incorrecto");
        }
        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new PacientesModel();
