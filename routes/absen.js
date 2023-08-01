const router = require("express").Router();
const absen = require("../controllers/absen");
const authorize = require("../middlewares/authorize");
const { ROLES } = require("../utils/enum");

router.post("/", authorize([ROLES.Siswa]), absen.createAbsen);

module.exports = router;
