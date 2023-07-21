'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Siswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_induk: {
        type: Sequelize.STRING
      },
      nis: {
        type: Sequelize.STRING
      },
      nama_siswa: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.STRING
      },
      tlp: {
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
      kelas_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Siswas');
  }
};