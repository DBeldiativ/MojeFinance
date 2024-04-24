const userDao = require("../../dao/uzivatel-dao.js");

async function ListUserAbl(req, res) {
    try {
        const userList = userDao.list();
        res.json(userList);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = ListUserAbl;