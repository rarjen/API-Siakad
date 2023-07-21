const router = require("express").Router();
const students = require("../controllers/students");
const authorize = require("../middlewares/authorize");
const { ROLES } = require("../utils/enum");

router.get("/results", authorize([ROLES.Siswa]), students.nilaUlangan);
router.get("/reports", authorize([ROLES.Siswa]), students.nilaiRaport);
router.get("/teachers", authorize([ROLES.Siswa]), students.teachers);
router.get("/classes", authorize([ROLES.Siswa]), students.classes);
module.exports = router;
