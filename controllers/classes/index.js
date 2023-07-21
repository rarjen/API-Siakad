const { indexClasses, showClass } = require("../../services/classes");
const { StatusCodes } = require("http-status-codes");

const index = async (req, res, next) => {
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

const show = async (req, res, next) => {
  try {
    const result = await showClass(req);
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
