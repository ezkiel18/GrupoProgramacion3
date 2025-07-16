'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Juego extends Model {
    static associate(models) {
      
    }
  }

  Juego.init({
    titulo: DataTypes.STRING,
    estado: DataTypes.STRING,
    calificacion: DataTypes.INTEGER,
    plataforma: DataTypes.STRING,
    genero: DataTypes.STRING,
    horas_jugadas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Juego',
    tableName: 'Juegos',
    timestamps: false
  });

  return Juego;
};
