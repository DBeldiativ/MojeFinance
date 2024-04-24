const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/transakce/getById");
const ListAbl = require("../abl/transakce/getListTransactionAbl");
const CreateAbl = require("../abl/transakce/createTransactionAbl");
const EditAbl = require("../abl/transakce/editTransactionAbl");
const DeleteAbl = require("../abl/transakce/deleteTransactionAbl");

router.get("/get", (req, res) => {
    GetAbl(req, res);
});

router.get("/", (req, res) => {
    ListAbl(req, res);
});

router.post("/create", (req, res) => {
    CreateAbl(req, res);
});

router.post("/edit", (req, res) => {
    EditAbl(req, res);
});

router.post("/delete", (req, res) => {
    DeleteAbl(req, res);
});

module.exports = router;