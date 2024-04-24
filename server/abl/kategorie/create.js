const Ajv = require("ajv");
const ajv = new Ajv();
const categoryDao = require("../../dao/kategorie-dao.js");


const schema = {
    type: "object",
    properties: {
        label: {type: "string"}
    },
    required: ["label"],
    additionalProperties: false,
};

async function CreateAbl(req, res) {
    try {
        let category = req.body;

        // validate input
        const valid = ajv.validate(schema, category);
        if (!valid) {
            res.status(400).json({
                code: "dtoInIsNotValid",
                message: "dtoIn is not valid",
                validationError: ajv.errors,
            });
            return;
        }

        category = categoryDao.create(category);
        res.json(category);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = CreateAbl;