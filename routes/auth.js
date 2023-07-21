const router = require("express").Router();
const auth = require("../controllers/auth");

router.post("/register", auth.create);
router.post("/login", auth.loginSiswa);

module.exports = router;
