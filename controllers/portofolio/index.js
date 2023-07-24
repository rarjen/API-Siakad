const { index, show } = require("../../services/portofolio");
const { StatusCodes } = require("http-status-codes");

const indexPortofolio = async (req, res, next) => {
  try {
    const result = await index(req);

    return res.status(StatusCodes.OK).json({
      status: true,
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const showPortofolio = async (req, res, next) => {
  try {
    const result = await show(req);

    return res.status(StatusCodes.OK).json({
      status: true,
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  indexPortofolio,
  showPortofolio,
};
