const categoryDao = require("../../dao/kategorie-dao.js");

async function ListAbl(req, res) {
    try {
        const categoryList = await categoryDao.list();

        res.json(categoryList);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = ListAbl;