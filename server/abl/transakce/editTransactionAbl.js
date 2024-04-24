const Ajv = require("ajv");
const ajv = new Ajv();
const validateDateTime = require("../../helpers/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const transactionDao = require("../../dao/transakce-dao.js");
const categoryDao = require("../../dao/kategorie-dao");

const schema = {
    type: "object",
    properties: {
        id: { type: "string" },
        categoryId: { type: "string" },
        amount: {type: "number"},
        type: { type: "string", enum: ["income", "expense"] },
        date: { type: "string", format: "date-time" },
        note: { type: "string"},
    },
    required: ["id"],
    additionalProperties: false,
};

async function EditAbl(req, res) {
    try {
        let transaction = req.body;

        const valid = ajv.validate(schema, transaction);
        if (!valid) {
            res.status(400).json({
                code: "dtoInIsNotValid",
                message: "dtoIn is not valid",
                validationError: ajv.errors,
            });
            return;
        }
        const category = categoryDao.get(transaction.categoryId);
        if (!category) {
            return res.status(400).json({
                code: "categoryIdNotFound",
                message: "categoryId does not exist in the category database",
            });
        }
        const editedTransaction = transactionDao.edit(transaction);
        if (!editedTransaction) {
            res.status(404).json({
                code: "transactionNotFound",
                message: `Transaction ${transaction.id} not found`,
            });
            return;
        }


        res.json(editedTransaction);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = EditAbl;