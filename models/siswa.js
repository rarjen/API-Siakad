"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Siswa.belongsTo(models.Kelas, {
        foreignKey: "kelas_id",
        as: "kelas",
      });
      Siswa.hasMany(models.Ulangan, {
        foreignKey: "siswa_id",
        as: "ulangan",
      });
      Siswa.hasMany(models.Rapot, {
        foreignKey: "siswa_id",
        as: "rapot",
      });
      Siswa.hasMany(models.Portofolio, {
        foreignKey: "siswa_id",
        as: "portofolio",
      });
      Siswa.hasMany(models.Absensi_siswa, {
        foreignKey: "siswa_id",
        as: "absensi_siswa",
      });
    }
  }
  Siswa.init(
    {
      no_induk: DataTypes.STRING,
      nis: DataTypes.STRING,
      nama_siswa: DataTypes.STRING,
      jk: DataTypes.STRING,
      telp: DataTypes.STRING,
      tmp_lahir: DataTypes.STRING,
      tgl_lahir: DataTypes.DATE,
      foto: DataTypes.STRING,
      kelas_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Siswa",
      tableName: "siswa", // Sesuaikan dengan nama tabel di database
      timestamps: true, // Jika ada kolom `created_at` dan `updated_at`
      underscored: true, // Gunakan underscore (_) sebagai pemisah nama kolom
      createdAt: "created_at", // Sesuaikan dengan nama kolom `created_at` di database
      updatedAt: "updated_at", // Sesuaikan d
    }
  );
  return Siswa;
};
