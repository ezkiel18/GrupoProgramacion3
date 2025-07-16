'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Juegos', [
      {
        titulo: 'The Witcher 3',
        plataforma: 'PC',
        genero: 'RPG',
        estado: 'Completado',
        calificacion: 4,
        horas_jugadas: 120
      },
      {
        titulo: 'Hollow Knight',
        plataforma: 'Switch',
        genero: 'Metroidvania',
        estado: 'Jugando',
        calificacion: 5,
        horas_jugadas: 45
      },
      {
        titulo: 'Red Dead Redemption 2',
        plataforma: 'PS4',
        genero: 'Aventura',
        estado: 'Pendiente',
        calificacion: null,
        horas_jugadas: 0
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Juegos', null, {});
  }
};
