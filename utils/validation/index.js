const Validator = require("fastest-validator");
const v = new Validator();
const { BadRequestError } = require("../../errors");

const validation = async (nis, password) => {
  const schema = {
    nis: { type: "string", min: 10 },
    password: { type: "string", min: 6 },
  };
  const check = await v.compile(schema);
  const validate = check({
    nis: `${nis}`,
    password: `${password}`,
  });
  if (validate.length > 0) {
    throw new BadRequestError("Nis tidak valid / Password minimal 6 karakter");
  }
};

module.exports = validation;
