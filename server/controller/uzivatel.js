const express = require("express");
const router = express.Router();

const GetByIdAbl = require("../abl/uzivatel/getUserByIdAbl");
const ListUserAbl = require("../abl/uzivatel/listUserAbl");
const CreateUserAbl = require("../abl/uzivatel/createUserAbl");
const UpdateUserAbl = require("../abl/uzivatel/updateUserAbl");
const DeleteUserAbl = require("../abl/uzivatel/deleteUserAbl");

router.get("/", (req, res) => {
    GetByIdAbl(req, res);
});

router.get("/list", (req, res) => {
    ListUserAbl(req, res);
});

router.post("/novyUzivatel", (req, res) => {
    CreateUserAbl(req, res);
});

router.post("/aktualUzivatele", (req, res) => {
    UpdateUserAbl(req, res);
});

router.post("/smazUzivatele", (req, res) => {
    DeleteUserAbl(req, res);
});

module.exports = router;