// config/database.js
const { Sequelize } = require("sequelize");

// Konfigurasi koneksi database
const sequelize = new Sequelize("siakad_main", "root", "", {
  host: "localhost",
  dialect: "mariadb", // Sesuaikan dengan database yang Anda gunakan, misalnya 'mysql', 'postgres', 'sqlite', 'mssql', dsb.
});

module.exports = { sequelize };
