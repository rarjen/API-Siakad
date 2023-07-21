const { indexTeachers, showTeacher } = require("../../services/teachers");
const { StatusCodes } = require("http-status-codes");

const index = async (req, res, next) => {
  try {
    const result = await indexTeachers(req);

    return res.status(StatusCodes.OK).json({
      status: true,
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const result = await showTeacher(req);

    return res.status(StatusCodes.OK).json({
      status: true,
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { index, show };
