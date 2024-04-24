const Ajv = require("ajv");
const ajv = new Ajv();
const fs = require("fs");
const path = require("path");
const userDao = require("../../dao/uzivatel-dao.js");
const transactionDao = require("../../dao/transakce-dao.js");
const categoryDao = require("../../dao/kategorie-dao.js");
const validateDateTime = require("../../helpers/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const schema = {
    type: "object",
    properties: {
        userId: { type: "string" },
        categoryId: {type: "string"},
        amount: {type: "number"},
        type: { type: "string", enum: ["income", "expense"] },
        date: { type: "string", format: "date-time" },
        note: { type: "string"},
    },
    required: ["userId", "categoryId", "amount", "type", "date"],
    additionalProperties: false,
};

async function CreateAbl(req, res) {
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

        const user = userDao.getById(transaction.userId);
        if (!user) {
            return res.status(400).json({
                code: "userIdNotFound",
                message: "userId does not exist in the user database",
            });
        }

        const category = categoryDao.get(transaction.categoryId);
        if (!category) {
            return res.status(400).json({
                code: "categoryIdNotFound",
                message: "categoryId does not exist in the category database",
            });
        }

        transaction = transactionDao.create(transaction);
        res.json(transaction);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
module.exports = CreateAbl;