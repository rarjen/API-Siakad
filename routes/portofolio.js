const router = require("express").Router();
const portofolio = require("../controllers/portofolio");
const authorize = require("../middlewares/authorize");
const { ROLES } = require("../utils/enum");

router.get("/", authorize([ROLES.Siswa]), portofolio.indexPortofolio);
router.get(
  "/:portofolio_id",
  authorize([ROLES.Siswa]),
  portofolio.showPortofolio
);
module.exports = router;
