"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kelas.hasMany(models.Siswa, {
        foreignKey: "kelas_id",
        as: "siswa",
      });
      Kelas.hasMany(models.Ulangan, {
        foreignKey: "kelas_id",
        as: "ulangan",
      });
      Kelas.hasMany(models.Rapot, {
        foreignKey: "kelas_id",
        as: "rapot",
      });
      Kelas.belongsTo(models.Guru, {
        foreignKey: "guru_id",
        as: "guru",
      });
      Kelas.belongsTo(models.Paket, {
        foreignKey: "paket_id",
        as: "paket",
      });
    }
  }
  Kelas.init(
    {
      nama_kelas: DataTypes.STRING,
      paket_id: DataTypes.INTEGER,
      guru_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Kelas",
      tableName: "kelas", // Sesuaikan dengan nama tabel di database
      timestamps: true, // Jika ada kolom `created_at` dan `updated_at`
      underscored: true, // Gunakan underscore (_) sebagai pemisah nama kolom
      createdAt: "created_at", // Sesuaikan dengan nama kolom `created_at` di database
      updatedAt: "updated_at", // Sesuaikan d
    }
  );
  return Kelas;
};
