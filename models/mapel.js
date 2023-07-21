"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mapel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mapel.hasMany(models.Rapot, {
        foreignKey: "mapel_id",
        as: "rapot",
      });
      Mapel.hasMany(models.Guru, {
        foreignKey: "mapel_id",
        as: "guru",
      });
    }
  }
  Mapel.init(
    {
      nama_mapel: DataTypes.STRING,
      kelompok: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Mapel",
      tableName: "mapel", // Sesuaikan dengan nama tabel di database
      timestamps: true, // Jika ada kolom `created_at` dan `updated_at`
      underscored: true, // Gunakan underscore (_) sebagai pemisah nama kolom
      createdAt: "created_at", // Sesuaikan dengan nama kolom `created_at` di database
      updatedAt: "updated_at", // Sesuaikan d
    }
  );
  return Mapel;
};
