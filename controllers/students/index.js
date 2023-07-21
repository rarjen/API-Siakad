const { indexUlangan, indexReport } = require("../../services/students");
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

module.exports = { nilaUlangan, nilaiRaport };
