const { NotFoundError } = require("../errors");
const { Guru, Mapel } = require("../models");

const indexTeachers = async (req) => {
  const result = await Guru.findAll({
    include: [
      {
        model: Mapel,
        as: "mapel",
        attributes: { exclude: ["created_at", "updated_at"] },
      },
    ],
    attributes: { exclude: ["mapel_id", "created_at", "updated_at"] },
  });

  return result;
};

const showTeacher = async (req) => {
  const { teacher_id } = req.params;

  const result = await Guru.findOne({
    where: { id: teacher_id },
    include: [
      {
        model: Mapel,
        as: "mapel",
        attributes: { exclude: ["created_at", "updated_at"] },
      },
    ],
    attributes: { exclude: ["mapel_id", "created_at", "updated_at"] },
  });

  if (!result) {
    throw new NotFoundError("Guru tidak ada!");
  }

  return result;
};

module.exports = { indexTeachers, showTeacher };
