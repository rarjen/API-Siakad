require("dotenv").config();
const { NotFoundError } = require("../errors");
const { Portofolio, Siswa } = require("../models");

const index = async (req) => {
  const user = req.user;
  const result = await Portofolio.findAll({
    include: [
      {
        model: Siswa,
        as: "siswa",
        attributes: { exclude: ["created_at", "updated_at", "kelas_id"] },
      },
    ],
    where: { siswa_id: user.siswa_id },
    attributes: { exclude: ["created_at", "updated_at", "siswa_id"] },
  });

  return {
    id: result.id,
    url: `https://admin-siakad.jasa-nikah-siri-amanah-profesional.com/${result.url}`,
  };
};

const show = async (req) => {
  const { portofolio_id } = req.params;
  const user = req.user;

  const result = await Portofolio.findOne({
    where: { id: portofolio_id, siswa_id: user.siswa_id },
    include: [
      {
        model: Siswa,
        as: "siswa",
        attributes: { exclude: ["created_at", "updated_at", "kelas_id"] },
      },
    ],
    attributes: { exclude: ["created_at", "updated_at", "siswa_id"] },
  });

  if (!result) {
    throw new NotFoundError("Portofolio tidak ada");
  }

  return result;
};

module.exports = { show, index };
