const Ajv = require("ajv");
const ajv = new Ajv();
const userDao = require("../../dao/uzivatel-dao.js");
const bcrypt = require("bcrypt");

const schema = {
    type: "object",
    properties: {
        id: { type: "string" },
        password: { type: "string" }
    },
    required: ["id"],
    additionalProperties: false,
};

async function DeleteUserAbl(req, res) {
    try {

        const reqParams = req.body;

        const valid = ajv.validate(schema, reqParams);
        if (!valid) {
            res.status(400).json({
                code: "dtoInIsNotValid",
                message: "dtoIn is not valid",
                validationError: ajv.errors,
            });
            return;
        }

        userDao.remove(reqParams.id);

        res.json({});
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = DeleteUserAbl;