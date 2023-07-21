'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rapots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siswa_id: {
        type: Sequelize.INTEGER
      },
      kelas_id: {
        type: Sequelize.INTEGER
      },
      guru_id: {
        type: Sequelize.INTEGER
      },
      mapel_id: {
        type: Sequelize.INTEGER
      },
      p_nilai: {
        type: Sequelize.STRING
      },
      p_predikat: {
        type: Sequelize.STRING
      },
      p_deskripsi: {
        type: Sequelize.TEXT
      },
      k_nilai: {
        type: Sequelize.STRING
      },
      k_predikat: {
        type: Sequelize.STRING
      },
      k_deskripsi: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rapots');
  }
};