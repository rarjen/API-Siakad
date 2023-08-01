const { Kehadiran, Siswa, Absensi_siswa } = require("../models");
const { NotFoundError } = require("../errors");

const create = async (req) => {
  const user = req.user;
  const { kehadiran_id } = req.body;

  const checkKehadiran = await Kehadiran.findOne({
    where: { id: kehadiran_id },
  });

  if (!checkKehadiran) {
    throw new NotFoundError("Kehadiran tidak ditemukan");
  }

  const result = await Absensi_siswa.create({
    tanggal: new Date(),
    siswa_id: user.siswa_id,
    kehadiran_id,
  });

  return result;
};

module.exports = { create };
