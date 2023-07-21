"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Guru.hasMany(models.Kelas, {
        foreignKey: "guru_id",
        as: "kelas",
      });
      Guru.hasMany(models.Rapot, {
        foreignKey: "guru_id",
        as: "rapot",
      });
      Guru.belongsTo(models.Mapel, {
        foreignKey: "guru_id",
        as: "mapel",
      });
    }
  }
  Guru.init(
    {
      id_card: DataTypes.STRING,
      nip: DataTypes.STRING,
      nama_guru: DataTypes.STRING,
      mapel_id: DataTypes.INTEGER,
      kode: DataTypes.STRING,
      jk: DataTypes.STRING,
      telp: DataTypes.STRING,
      tmp_lahir: DataTypes.STRING,
      tgl_lahir: DataTypes.DATE,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Guru",
      tableName: "guru", // Sesuaikan dengan nama tabel di database
      timestamps: true, // Jika ada kolom `created_at` dan `updated_at`
      underscored: true, // Gunakan underscore (_) sebagai pemisah nama kolom
      createdAt: "created_at", // Sesuaikan dengan nama kolom `created_at` di database
      updatedAt: "updated_at", // Sesuaikan d
    }
  );
  return Guru;
};
