"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Absensi_siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Absensi_siswa.belongsTo(models.Kehadiran, {
        foreignKey: "kehadiran_id",
        as: "kehadiran",
      });
      Absensi_siswa.belongsTo(models.Siswa, {
        foreignKey: "siswa_id",
        as: "siswa",
      });
    }
  }
  Absensi_siswa.init(
    {
      tanggal: DataTypes.DATE,
      siswa_id: DataTypes.INTEGER,
      kehadiran_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Absensi_siswa",
      tableName: "absensi_siswa", // Sesuaikan dengan nama tabel di database
      timestamps: true, // Jika ada kolom `created_at` dan `updated_at`
      underscored: true, // Gunakan underscore (_) sebagai pemisah nama kolom
      createdAt: "created_at", // Sesuaikan dengan nama kolom `created_at` di database
      updatedAt: "updated_at", // Sesuaikan d
    }
  );
  return Absensi_siswa;
};
