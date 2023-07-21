const { register, login } = require("../../services/auth");
const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
  try {
    const result = await register(req);

    return res.status(StatusCodes.CREATED).json({
      status: true,
      message: "Berhasil register!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginSiswa = async (req, res, next) => {
  try {
    const result = await login(req);

    return res.status(StatusCodes.OK).json({
      status: true,
      message: "Berhasil login!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, loginSiswa };
