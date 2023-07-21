const router = require("express").Router();
const students = require("./students");
const auth = require("./auth");
const classes = require("./classes");
const teachers = require("./teachers");

router.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "success",
    data: null,
  });
});

router.use("/students", students);
router.use("/auth", auth);
router.use("/classes", classes);
router.use("/teachers", teachers);

module.exports = router;
