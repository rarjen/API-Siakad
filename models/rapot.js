"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rapot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rapot.belongsTo(models.Siswa, {
        foreignKey: "siswa_id",
        as: "siswa",
      });
      Rapot.belongsTo(models.Kelas, {
        foreignKey: "kelas_id",
        as: "kelas",
      });
      Rapot.belongsTo(models.Guru, {
        foreignKey: "guru_id",
        as: "guru",
      });
      Rapot.belongsTo(models.Mapel, {
        foreignKey: "mapel_id",
        as: "mapel",
      });
    }
  }
  Rapot.init(
    {
      siswa_id: DataTypes.INTEGER,
      kelas_id: DataTypes.INTEGER,
      guru_id: DataTypes.INTEGER,
      mapel_id: DataTypes.INTEGER,
      p_nilai: DataTypes.STRING,
      p_predikat: DataTypes.STRING,
      p_deskripsi: DataTypes.TEXT,
      k_nilai: DataTypes.STRING,
      k_predikat: DataTypes.STRING,
      k_deskripsi: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Rapot",
      tableName: "rapot", // Sesuaikan dengan nama tabel di database
      timestamps: true, // Jika ada kolom `created_at` dan `updated_at`
      underscored: true, // Gunakan underscore (_) sebagai pemisah nama kolom
      createdAt: "created_at", // Sesuaikan dengan nama kolom `created_at` di database
      updatedAt: "updated_at", // Sesuaikan d
    }
  );
  return Rapot;
};
