const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/kategorie/get");
const CreateAbl = require("../abl/kategorie/create");
const ListAbl = require("../abl/kategorie/listKategorieAbl");
const DeleteAbl = require("../abl/kategorie/delete");
const EditAbl = require("../abl/kategorie/edit");

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