const { NotFoundError } = require("../errors");
const { Kelas, Guru, Mapel } = require("../models");

const indexClasses = async (req) => {
  const result = await Kelas.findAll({
    include: [
      {
        model: Guru,
        as: "guru",
        include: [
          {
            model: Mapel,
            as: "mapel",
            attributes: { exclude: ["created_at", "updated_at"] },
          },
        ],
        attributes: { exclude: ["created_at", "updated_at", "mapel_id"] },
      },
    ],
    attributes: { exclude: ["created_at", "updated_at"] },
  });

  return result;
};

const showClass = async (req) => {
  const { class_id } = req.params;
  const result = await Kelas.findOne({
    where: { id: class_id },
    include: [
      {
        model: Guru,
        as: "guru",
        include: [
          {
            model: Mapel,
            as: "mapel",
            attributes: { exclude: ["created_at", "updated_at"] },
          },
        ],
        attributes: { exclude: ["created_at", "updated_at", "mapel_id"] },
      },
    ],
    attributes: { exclude: ["created_at", "updated_at"] },
  });

  if (!result) {
    throw new NotFoundError("Kelas tidak ditemukan!");
  }

  return result;
};

module.exports = { indexClasses, showClass };
