const express = require('express')
const app = express()

const transakceController = require("./controller/transakce");
const uzivatelController = require("./controller/uzivatel");
const kategorieController = require("./controller/kategorie");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/transakce", transakceController);
app.use("/uzivatel", uzivatelController);
app.use("/kategorie", kategorieController);

app.listen(5000,() => {console.log("Started at port 5000")})