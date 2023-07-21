const {
  indexUlangan,
  indexReport,
  indexTeachers,
  indexClasses,
} = require("../../services/students");
const { StatusCodes } = require("http-status-codes");

const nilaUlangan = async (req, res, next) => {
  try {
    const result = await indexUlangan(req);

    return res.status(StatusCodes.OK).json({
      status: true,
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const nilaiRaport = async (req, res, next) => {
  try {
    const result = await indexReport(req);

    return res.status(StatusCodes.OK).json({
      status: true,
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const teachers = async (req, res, next) => {
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

const classes = async (req, res, next) => {
  try {
    const result = await indexClasses(req);
    return res.status(StatusCodes.OK).json({
      status: true,
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { nilaUlangan, nilaiRaport, teachers, classes };
