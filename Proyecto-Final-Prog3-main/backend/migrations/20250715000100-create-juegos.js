'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Juegos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      estado: {
        type: Sequelize.STRING
      },
      calificacion: {
        type: Sequelize.INTEGER
      },
      plataforma: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      horas_jugadas: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Juegos');
  }
};
