const { create } = require("../../services/absen");

const { StatusCodes } = require("http-status-codes");

const createAbsen = async (req, res, next) => {
  try {
    const result = await create(req);

    return res.status(StatusCodes.CREATED).json({
      status: true,
      message: "Berhasil absen!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createAbsen };
