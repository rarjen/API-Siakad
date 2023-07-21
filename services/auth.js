const { User, Siswa } = require("../models");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;
const { ROLES } = require("../utils/enum");

const register = async (req) => {
  const { nis, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    throw new BadRequestError(`Password doesn't match`);
  }

  const siswaExist = await Siswa.findOne({ where: { nis } });

  if (!siswaExist) {
    throw new BadRequestError("Data siswa tidak ditemukan");
  }

  const passwordHashed = await bcrypt.hash(password, 10);

  const result = await User.create({
    name: siswaExist.nama_siswa,
    email: nis,
    password: passwordHashed,
    role: ROLES.Siswa,
    no_induk: siswaExist.no_induk,
  });

  return result;
};

const login = async (req) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    throw new BadRequestError("Email atau password salah");
  }

  const siswaExist = await Siswa.findOne({ where: { nis: email } });
  if (!siswaExist) {
    throw new BadRequestError("Email atau password salah");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new BadRequestError("Email atau password salah");
  }

  const payload = {
    id: user.id,
    siswa_id: siswaExist.id,
    name: user.name,
    email: user.email,
    role: user.role,
    no_induk: user.no_induk,
    id_card: user.id_card,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY);
  console.log(token);

  await User.update({ remember_token: token }, { where: { email } });

  return token;
};

module.exports = { register, login };
