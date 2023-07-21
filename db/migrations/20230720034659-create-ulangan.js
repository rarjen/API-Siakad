'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ulangans', {
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
      ulha_1: {
        type: Sequelize.STRING
      },
      ulha_2: {
        type: Sequelize.STRING
      },
      uts: {
        type: Sequelize.STRING
      },
      ulha_3: {
        type: Sequelize.STRING
      },
      uas: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Ulangans');
  }
};