const { Kehadiran, Absensi_siswa } = require("../models");
const { NotFoundError, BadRequestError } = require("../errors");
const countRadius = require("../utils/countRadius");

const create = async (req) => {
  const user = req.user;
  const { kehadiran_id, lat, lon } = req.body;

  const radius = await countRadius(lat, lon, -7.14109, 110.28436);

  console.log(radius);

  if (radius >= 50) {
    throw new BadRequestError("Anda diluar jangkauan!");
  }

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
