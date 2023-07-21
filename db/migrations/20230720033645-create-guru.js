'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gurus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_card: {
        type: Sequelize.STRING
      },
      nip: {
        type: Sequelize.STRING
      },
      nama_guru: {
        type: Sequelize.STRING
      },
      mapel_id: {
        type: Sequelize.INTEGER
      },
      kode: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.STRING
      },
      telp: {
        type: Sequelize.STRING
      },
      tmp_lahir: {
        type: Sequelize.STRING
      },
      tgl_lahir: {
        type: Sequelize.DATE
      },
      foto: {
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
    await queryInterface.dropTable('Gurus');
  }
};