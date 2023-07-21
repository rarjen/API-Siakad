"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ulangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ulangan.belongsTo(models.Siswa, {
        foreignKey: "siswa_id",
        as: "siswa",
      });
      Ulangan.belongsTo(models.Kelas, {
        foreignKey: "kelas_id",
        as: "kelas",
      });
    }
  }
  Ulangan.init(
    {
      siswa_id: DataTypes.INTEGER,
      kelas_id: DataTypes.INTEGER,
      guru_id: DataTypes.INTEGER,
      mapel_id: DataTypes.INTEGER,
      ulha_1: DataTypes.STRING,
      ulha_2: DataTypes.STRING,
      uts: DataTypes.STRING,
      ulha_3: DataTypes.STRING,
      uas: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ulangan",
      tableName: "ulangan", // Sesuaikan dengan nama tabel di database
      timestamps: true, // Jika ada kolom `created_at` dan `updated_at`
      underscored: true, // Gunakan underscore (_) sebagai pemisah nama kolom
      createdAt: "created_at", // Sesuaikan dengan nama kolom `created_at` di database
      updatedAt: "updated_at", // Sesuaikan d
    }
  );
  return Ulangan;
};
