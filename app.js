//<=========== Import packages ==========>
const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");
const config = require("./dbConfig.js/index.js.js");

//=========Put to use==========
const app = express();
const con = mysql.createConnection(config);
app.use("/img", express.static(path.join(__dirname, 'img')));
app.use("/style.css", express.static(path.join(__dirname, 'style.css')));

//<=========== Middleware ==========>
app.use(body_parser.urlencoded({ extended: true })); //when you post service
app.use(body_parser.json());
// =========== Services ===========


// =========== Services (Page loading) ===========

//Root Page (landing page 1)
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/landing_page1.html"))
});

//Login Page
app.get("/loginpage", function (req, res) {
    res.sendFile(path.join(__dirname, "/login_page.html"))
});

// ========== Starting server ============
const PORT = 35000
app.listen(PORT, function () {
    console.log("Sever is running at " + PORT);
});