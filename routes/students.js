const router = require("express").Router();
const students = require("../controllers/students");
const authorize = require("../middlewares/authorize");
const { ROLES } = require("../utils/enum");

router.get("/results", authorize([ROLES.Siswa]), students.nilaUlangan);
router.get("/reports", authorize([ROLES.Siswa]), students.nilaiRaport);

module.exports = router;
