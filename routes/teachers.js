const router = require("express").Router();
const teachers = require("../controllers/teachers");
const authorize = require("../middlewares/authorize");
const { ROLES } = require("../utils/enum");

router.get("/", authorize([ROLES.Siswa]), teachers.index);
router.get("/:teacher_id", authorize([ROLES.Siswa]), teachers.show);

module.exports = router;
