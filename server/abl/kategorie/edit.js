const Ajv = require("ajv");
const ajv = new Ajv();


const categoryDao = require("../../dao/kategorie-dao");

const schema = {
    type: "object",
    properties: {
        id: { type: "string" },
        label: { type: "string" },
    },
    required: ["id"],
    additionalProperties: false,
};

async function EditAbl(req, res) {
    try {
        let category = req.body;

        const valid = ajv.validate(schema, category);
        if (!valid) {
            res.status(400).json({
                code: "dtoInIsNotValid",
                message: "dtoIn is not valid",
                validationError: ajv.errors,
            });
            return;
        }

        const editedCategory = categoryDao.edit(category);
        if (!editedCategory) {
            res.status(404).json({
                code: "categoryNotFound",
                message: `Category ${category.id} not found`,
            });
            return;
        }

        res.json(editedCategory);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = EditAbl;