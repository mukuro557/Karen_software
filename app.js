//<=========== Import packages ==========>
const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");
const config = require("./dbConfig.js");

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
    res.sendFile(path.join(__dirname, "/landing1.html"))
});

//Return login page
app.get("/page/login", function (req, res) {
    res.sendFile(path.join(__dirname, "/login.html"))
});

//Return manage user page
app.get("/page/manageUser", function (req, res) {
    res.sendFile(path.join(__dirname, "/manageUser.html"))
});

//Return home page
app.get("/page/home", function (req, res) {
    res.sendFile(path.join(__dirname, "/home.html"))
});

//Return profile page
app.get("/page/profile", function (req, res) {
    res.sendFile(path.join(__dirname, "/profile.html"))
});

//Return dashboard page
app.get("/page/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "/dashboard.html"))
});

//Return lost item page
app.get("/page/lostItem", function (req, res) {
    res.sendFile(path.join(__dirname, "/lostItem.htm"))
});

//Return date time page
app.get("/page/dateTime", function (req, res) {
    res.sendFile(path.join(__dirname, "/dateTime.html"))
});

//Return date manage page
app.get("/page/dateManage", function (req, res) {
    res.sendFile(path.join(__dirname, "/dateManage.html"))
});

//Return date landing2 page
app.get("/page/landing2", function (req, res) {
    res.sendFile(path.join(__dirname, "/landing2.html"))
});

//Return single item page
app.get("/page/singleItem", function (req, res) {
    res.sendFile(path.join(__dirname, "/singleItem.html"))
});

//Return index page
app.get("/page/mainpageAdmin", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"))
});

//Return data table page
app.get("/page/maindataTable", function (req, res) {
    res.sendFile(path.join(__dirname, "/mainDataTable.html"))
});

//================== Services (functions) ===================

// Load inspected item number by the user with lost status
app.get("/user/profile/inspectedItem/status/lost/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "SELECT count(status) FROM item WHERE status=0 AND Email_Committee=?;"

    con.query(sql, [Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load inspected item number by the user with repair status
app.get("/user/profile/inspectedItem/status/repair/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "SELECT count(status) FROM item WHERE status=2 AND Email_Committee=?;"

    con.query(sql, [Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load inspected item number by the user with normal status
app.get("/user/profile/inspectedItem/status/normal/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "SELECT count(status) FROM item WHERE status=1 AND Email_Committee=?;"

    con.query(sql, [Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load inspected item number by the user
app.get("/user/profile/inspectedItem/number/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "SELECT count(Email_Committee) FROM `item` WHERE Email_Committee=?;"

    con.query(sql, [Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load email of user
app.get("/user/index/info/emailUser/:Email_user", function (req, res) {
    const Email_user = req.params.Email_user;
    const sql = "SELECT Email_user FROM `year_user` WHERE Email_user=?;"

    con.query(sql, [Email_user], function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load inspected item by the user
app.get("/user/profile/inspectedItem/info/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "select IMAGE,Inventory_Number,Asset_Description,Model,Date_Scan,Cost_center,Location,Status from item where Email_Committee=?;"

    con.query(sql, [Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load all item info
app.get("/item/dashboard/showAllInfo", function (req, res) {
    const sql = "select IMAGE,Inventory_Number,Location,Received_date,Original_value,Department,Date_Scan,Email_Committee,Status from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load item number with lost status
app.get("/item/dashboard/number/status/lost", function (req, res) {
    const sql = "SELECT count(status) FROM item WHERE status=0;"

    con.query(sql,  function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load item number with repair status
app.get("/item/dashboard/number/status/repair", function (req, res) {
    const sql = "SELECT count(status) FROM item WHERE status=2;"

    con.query(sql,  function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load item number with normal status
app.get("/item/dashboard/number/status/normal", function (req, res) {
    const sql = "SELECT count(status) FROM item WHERE status=1;"

    con.query(sql,  function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load lost item info
app.get("/item/lost", function (req, res) {
    const sql = "select Image,Inventory_Number,Model,Serial,Location,Received_date,Original_value,Department,Vendor_name,Date_Upload,Date_scan,Email_Committee,Status from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load some info of item of landing1
app.get("/item/landing1/showSomeInfo", function (req, res) {
    const sql = "select Inventory_Number,Asset_description,Received_date,Department,Image from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load all info of item of landing1
app.get("/item/landing1/showAllInfo", function (req, res) {
    const sql = "select Inventory_Number,Status,Model,Location,Original_value,Email_Committee,Cost_center,Serial,Date_Upload,Asset_description,Received_date,Department,Image from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load some info of item of landing2
app.get("/item/landing2/showSomeInfo", function (req, res) {
    const sql = "select Inventory_Number,Status,Model,Cost_center,Received_date,Department,Image from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load date and time of job
app.get("/dateTime/showDateTime", function (req, res) {
    const sql = "select Date_start,Date_end from date_check"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// Load info of main datatable page
app.get("/maindataTable/info", function (req, res) {
    const sql = "select Image,Inventory_Number,Model,Serial,Location,Received_date,Original_value,Cost_center,Department,Vendor_name,Date_Upload,Date_scan,Email_Committee,Status from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("DB error");
        } else {
            res.json(result).send()
        }
    })
});

// ================ EXAMPLE Draft of the API =================
app.put("/item/lost/edit", function (req, res) {
    const Email_user = req.body.Email_user;
    const Status = req.body.Status;


    const sql = "update item set Email committee = ?,Status = ? where Inventory_Number = ? and Year = ?";

    con.query(sql, [Email_user, Status, inventory, year], function () {
        if (err) {
            console.error(err.message);
            res.status(500).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
            return;
        }

        else {

        }
    });
});

// ========== Starting server ============
const PORT = 35000
app.listen(PORT, function () {
    console.log("Sever is running at " + PORT);
});