const { Siswa, Kelas, Ulangan, Guru, Rapot, Mapel } = require("../models");

const indexUlangan = async (req) => {
  const user = req.user;
  const result = await Ulangan.findAll({
    include: [
      {
        model: Siswa,
        as: "siswa",
        attributes: { exclude: ["created_at", "updated_at", "kelas_id"] },
      },
      {
        model: Kelas,
        as: "kelas",
        attributes: {
          exclude: ["created_at", "updated_at", "guru_id"],
        },
        include: [
          {
            model: Guru,
            as: "guru",
            attributes: { exclude: ["created_at", "updated_at"] },
          },
        ],
      },
    ],
    where: { siswa_id: user.siswa_id },
    attributes: ["ulha_1", "ulha_2", "uts", "ulha_3", "uas"],
  });

  return result;
};

const indexReport = async (req) => {
  const user = req.user;

  const result = await Rapot.findAll({
    where: { siswa_id: user.siswa_id },
    include: [
      {
        model: Siswa,
        as: "siswa",
        attributes: { exclude: ["created_at", "updated_at", "kelas_id"] },
      },
      {
        model: Kelas,
        as: "kelas",
        attributes: {
          exclude: ["created_at", "updated_at", "guru_id"],
        },
      },
      {
        model: Guru,
        as: "guru",
        attributes: { exclude: ["created_at", "updated_at", "mapel_id"] },
      },
      {
        model: Mapel,
        as: "mapel",
        attributes: { exclude: ["created_at", "updated_at"] },
      },
    ],
    attributes: [
      "p_nilai",
      "p_predikat",
      "p_deskripsi",
      "k_nilai",
      "k_predikat",
      "k_deskripsi",
    ],
  });

  return result;
};

module.exports = { indexUlangan, indexReport };
