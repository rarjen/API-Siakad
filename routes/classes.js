const router = require("express").Router();
const classes = require("../controllers/classes");
const authorize = require("../middlewares/authorize");
const { ROLES } = require("../utils/enum");

router.get("/", authorize([ROLES.Siswa]), classes.index);
router.get("/:class_id", authorize([ROLES.Siswa]), classes.show);
module.exports = router;
