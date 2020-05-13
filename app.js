//<=========== Import packages ==========>
const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");
const config = require("./dbConfig.js");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const cookieSession = require("cookie-session");
const key = require("./config/key");
const xlsx = require("xlsx");
const d = new Date().getFullYear().toString();
const readXlsxfile = require("read-excel-file/node")

//=========Put to use==========
const storageOption = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {

        cb(null, d + "_" + file.originalname);

    }
});


const app = express();
app.set("view engine", "ejs");
const con = mysql.createConnection(config);
app.use("/img", express.static(path.join(__dirname, 'img')));
app.use("/style.css", express.static(path.join(__dirname, 'style.css')));

// read excel file (import), put excel file into work folder
var wb = xlsx.readFile("sampleData.xlsx", { cellDates: true });
var ws = wb.Sheets["sheet1"];
var JSONexcel = xlsx.utils.sheet_to_json(ws);

// write excel file (export)
var exportExcel = JSONexcel.map(function (record) {
    return record;
});
const upload = multer({ storage: storageOption }).single("filetoupload");

// var newWB = xlsx.utils.book_new();
// var newWS = xlsx.utils.json_to_sheet(exportExcel);
// xlsx.utils.book_append_sheet(newWB, newWS, "New Data");
// Uncomment "xlsx.writeFile(newWB,"Exported_File.xlsx");" below to export file
// xlsx.writeFile(newWB,"Exported_File.xlsx");

// var myDate = new Date("2020-01-22T")
// var myTime = ("13:00:00")
// console.log(myDate)
// console.log(myTime);
// // getDateTime
// function getDateTime(year,month,day,hour,minute){
//     var inputDate = ("'"+year+'-'+month+'-'+day+'T'+hour+':'+minute+':00'+"'");
//     var convertedDate = new Date(inputDate);
//     console.log(convertedDate);
// };
// // getDateTime(2020,05,5,17,30)


//<=========== Middleware ==========>
app.use(body_parser.urlencoded({ extended: true })); //when you post service
app.use(body_parser.json());
//cookie
app.use(cookieSession({
    // maxAge: 1000*60*60,
    maxAge: 1000 * 60 * 60,
    keys: [key.cookie.secret]
}));
// init passport for se/derialization
app.use(passport.initialize());
// session
app.use(passport.session());
// authen
app.use("/auth", authRoutes);
// profle
app.use("/profile", profileRoutes);
// =========== Services ===========


// =========== Services (Page loading) ===========

//Root Page (landing page 1)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/landing1.html"));
    // res.render("home.ejs", {user: req.user});
});

//Return manageUser page
app.get("/checkpage", function (req, res) {
    res.sendFile(path.join(__dirname, "/checkpage.html"))
});
app.get("/manageUser", function (req, res) {
    res.sendFile(path.join(__dirname, "/manageUser.html"))
});

app.get("/printqrcode", function (req, res) {
    res.sendFile(path.join(__dirname, "/printqrcode.html"))
});

//Return home page
app.get("/mainpage", function (req, res) {
    res.sendFile(path.join(__dirname, "/mainpage.html"))
});

//Return User_history page
app.get("/User_history", function (req, res) {
    res.sendFile(path.join(__dirname, "/User_history.html"))
});

//Return dashboard page
app.get("/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "/dashboard.html"))
});

//Return change_disapear page
app.get("/change_disapear", function (req, res) {
    res.sendFile(path.join(__dirname, "/change_disapear.html"))
});

//Return Date_manage time page
app.get("/Date_manage", function (req, res) {
    res.sendFile(path.join(__dirname, "/Date_manage.html"))
});

//Return Date_managerUser page
app.get("/Date_manageUser", function (req, res) {
    res.sendFile(path.join(__dirname, "/Date_manageUser.html"))
});

//Return landing1 page
app.get("/landing1", function (req, res) {
    res.sendFile(path.join(__dirname, "/landing1.html"))
});

//Return landing2 page
app.get("/landing2", function (req, res) {
    res.sendFile(path.join(__dirname, "/landing2.html"))
});

//Return single item page
app.get("/singleItem", function (req, res) {
    res.sendFile(path.join(__dirname, "/singleItem.html"))
});

//Return information page
app.get("/information", function (req, res) {
    res.sendFile(path.join(__dirname, "/information.html"))
});


//Return landing1 page
app.get("/takepicture", function (req, res) {
    res.sendFile(path.join(__dirname, "/takepicture.html"))
});



//================== Services (functions) ===================

// ============= Upload ==============
app.post("/uploading/:email", function (req, res) {
    const email = req.params.email
    upload(req, res, function (err) {
        if (err) {
            // An unknown error occurred when uploading.
            res.status(500).send("ไม่สามารถอัพโหลดไฟล์นี้ได้");
            return;
        }
        // Everything went fine.
        console.log(email)
        importExelData2MySQL(res, __dirname + '/upload/' + req.file.filename, email)
        console.log(req.file.filename)
        res.status(200).send("บันทึกสำเร็จ");
    })
});
// import
function importExelData2MySQL(res, filePath, email) {
    readXlsxfile(filePath).then((rows) => {
        console.log(rows);
        const date = new Date();
        rows.shift();

        let sql = "INSERT INTO item (`Asset_Number`,`Asset_Description`,`Model`,`Serial`,`Location`,`Room`,`Received_date`,`Original_value`,`Cost_center`,`Department`,`Vendor_name`,Year,Status, Email_Importer,Date_Upload) VALUES ?";
        var count = [1,4,5,6,7,8,9,10,11,12,13];
        for (var i = 0; i < rows.length; i++) {
            var temp = rows[i];
           
            rows[i] = [];

            for (var j = 0; j < 11; j++) {

                rows[i].push(temp[count[j]]);
            }
            rows[i].push(d);
            rows[i].push(0);
            rows[i].push(email);
            rows[i].push(date);
        }


        con.query(sql, [rows], function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send("มีข้อมูลนี้แล้วในระบบ")
            } else {


            }
        })
    });
}

// ============= Upload if already upload ==============
app.post("/uploadif/:email", function (req, res) {
    const email = req.params.email
    upload(req, res, function (err) {
        if (err) {
            // An unknown error occurred when uploading.
            res.status(500).send("ไม่สามารถอัพโหลดไฟล์นี้ได้");
            return;
        }
        // Everything went fine.
        console.log(email)
        importfromexel(res, __dirname + '/upload/' + req.file.filename, email)
        console.log(req.file.filename)
    })
});
// import
function importfromexel(res, filePath, email) {
    readXlsxfile(filePath).then((rows) => {
        console.log(rows);
        const date = new Date();
        rows.shift();
        const year = new Date().getFullYear();
        const sql = "DELETE FROM item WHERE Year = ? ;"
        con.query(sql, [year], function (err, result, fields) {
            if (err) {
                res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
                console.log(err)
            }
            else {
                let sql = "INSERT INTO item (`Asset_Number`,`Asset_Description`,`Model`,`Serial`,`Location`,`Room`,`Received_date`,`Original_value`,`Cost_center`,`Department`,`Vendor_name`,Year,Status, Email_Importer,Date_Upload) VALUES ?";
                var count = [1,4,5,6,7,8,9,10,11,12,13];
                for (var i = 0; i < rows.length; i++) {
                    var temp = rows[i];
                    rows[i] = [];

                    for (var j = 0; j < 11; j++) {

                        rows[i].push(temp[count[j]]);
                    }
                    rows[i].push(d);
                    rows[i].push(0);
                    rows[i].push(email);
                    rows[i].push(date);
                }


                con.query(sql, [rows], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.send("มีข้อมูลนี้แล้วในระบบ")
                    } else {
res.send("บันทึกสำเร็จ")

                    }
                })
            }
        })


    });
}


// บังคับถ่ายรูป
app.put("/item/take", function (req, res) {

    const image = req.body.take;

    const sql = "UPDATE item SET takepicture = 1 where Asset_Number IN(?) ;"
    con.query(sql, [image], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
            console.log(err)
        }
        else {
            res.send("แก้ไขข้อมูลเรียบร้อย");
        }
    })
});



// Add image to an item
app.put("/item/addImage", function (req, res) {
    const image = req.body.image;
    const Asset_Number = req.body.Asset_Number;
    const sql = "UPDATE item SET image=? where Asset_Number=?;"
    con.query(sql, [image, Asset_Number], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        }
        else {
            res.send("แก้ไขข้อมูลเรียบร้อย");
        }
    })
});

// Load info of all user 
app.get("/manageUser/showAllUsers/:Email_user", function (req, res) {
    const Email_user = req.params.Email_user;
    // const year =  new Date().getFullYear();
    const sql = "select year,Email_user,Email_assigner,role from year_user WHERE Email_user = ?"

    con.query(sql, [Email_user], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load inspected total item numbers by a user
app.get("/user/profile/inspectedItem/Total/Number1/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "SELECT count(status) AS 'Numbers_of_Inspected_Item' FROM item WHERE Email_Committee=? AND Year =?;"

    con.query(sql, [Email_Committee, d], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Loadnumber people scan in that day
app.get("/user/datescan", function (req, res) {
    const year =  new Date().getFullYear();
    const sql = "SELECT Date_Scan FROM item WHERE Year = ? ;"

    con.query(sql,[year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load inspected total item numbers by a user
app.get("/user/profile/inspectedItem/Total/Number/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "SELECT count(status) AS 'Numbers_of_Inspected_Item' FROM item WHERE Email_Committee=?;"

    con.query(sql, [Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load inspected item numbers of status by user
app.get("/user/profile/inspectedItem/:Status/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const Status = req.params.Status;
    const sql = "SELECT count(status) AS 'Numbers_of_Inspected_Item' FROM item WHERE Status=? AND Email_Committee=?;"

    con.query(sql, [Status, Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});
// Load year
app.get("/year/user", function (req, res) {
    const sql = "SELECT DISTINCT Year FROM year_user"


    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load date scan
app.get("/datescan/user", function (req, res) {
    const year =  new Date().getFullYear();
    const sql = "SELECT DISTINCT Date_Scan FROM item where Year = ? ORDER BY Date_scan"


    con.query(sql,[year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load year
app.get("/year/iteem", function (req, res) {
    const sql = "SELECT DISTINCT Year FROM item ORDER BY Year"


    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Add info of new user in manage user page
app.put("/manageUser/update/:Email_user/:Email_assigner/:role/:Email_useru", function (req, res) {
    const year = new Date().getFullYear();
    const Email_user = req.params.Email_user;
    const Email_assigner = req.params.Email_assigner;
    const role = req.params.role;
    const Email_useru = req.params.Email_useru;

    const sql = "UPDATE year_user SET year = ?,Email_user = ?,Email_assigner = ?,role = ? WHERE Email_user = ?;";
    con.query(sql, [year, Email_user, Email_assigner, role, Email_useru], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        }
        else {
            res.send("แก้ไขข้อมูลเรียบร้อย");
        }
    })
});

// Load email of user
app.get("/user/index/info/emailUser/:Email_user", function (req, res) {
    const Email_user = req.params.Email_user;
    const sql = "SELECT Email_user FROM `year_user` WHERE Email_user=?;"

    con.query(sql, [Email_user], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load inspected item by the user
app.get("/user/profile/inspectedInfoItem/:Email_Committee", function (req, res) {
    const Email_Committee = req.params.Email_Committee;
    const sql = "select Image,Asset_Number,Received_date,Date_scan,Model,Date_Scan,Department,Date_Upload,Status,Email_Committee from item where Email_Committee=?;"

    con.query(sql, [Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load all item info
app.get("/item/dashboard/showAllInfo", function (req, res) {
    const sql = "select * from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load all item for import
app.get("/item/dashboard/showuser", function (req, res) {
    const year = new Date().getFullYear();

    const sql = "select DISTINCT Status from item WHERE Year = ?;"

    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load all item info with location
app.get("/item/dashboard/showAllInfo/:location", function (req, res) {
    const location = req.params.location;
    const sql = "select * FROM item WHERE Location = ?"

    con.query(sql, [location], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});



// Load item numbers
app.get("/item/dashboard/number/:status", function (req, res) {
    const sql = "SELECT count(status) AS 'Numbers_of_item' FROM item WHERE status=?;"
    const year = new Date().getFullYear();
    const status = req.params.status;
    con.query(sql, [status, year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load item numbers
app.get("/item/dashboard/number", function (req, res) {
    const sql = "SELECT count(status) AS 'Numbers_of_item' FROM item ;"
    const year = new Date().getFullYear();
    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load item numbers with year
app.get("/item/dashboard/number2/:status/:year", function (req, res) {
    const sql = "SELECT count(status) AS 'Numbers_of_item' FROM item WHERE status=? AND year = ?;"
    const year = req.params.year;
    const status = req.params.status;
    con.query(sql, [status, year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load item numbers year
app.get("/item/dashboard/number1/:year", function (req, res) {
    const sql = "SELECT count(Status) AS 'Numbers_of_item' FROM item WHERE year = ?;"
    const year = req.params.year;
    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// // Load location
app.get("/item/Location", function (req, res) {
    const sql = "SELECT DISTINCT Location FROM item"


    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// // Load Status
app.get("/item/Status", function (req, res) {
    const sql = "SELECT DISTINCT Status FROM item"


    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load all item info with Status
app.get("/item/dashboard/showAllInfo1/:status", function (req, res) {
    const status = req.params.status;
    const sql = "select * from item WHERE Status = ?"

    con.query(sql, [status], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// // Load year
app.get("/item/Year", function (req, res) {
    const sql = "SELECT DISTINCT Year FROM item"


    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load all item info with year
app.get("/item/dashboard/showAllInfo4/:Year", function (req, res) {
    const year = req.params.Year;
    const sql = "select * from item WHERE Year = ?"

    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// // Load commitee
app.get("/item/Email_Committee", function (req, res) {
    const sql = "SELECT DISTINCT Email_Committee FROM item ORDER BY Email_Committee"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load all item info with commitee
app.get("/item/dashboard/showAllInfo3/:Email_Committee", function (req, res) {
    const thecommittee = req.params.Email_Committee;
    const sql = "select * from item WHERE Email_Committee  = ?"

    con.query(sql, [thecommittee], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});


// Load item info
app.get("/item/:status", function (req, res) {
    const sql = "select Image,Asset_Number,Model,Serial,Location,Received_date,Original_value,Department,Vendor_name,Date_Upload,Date_scan,Email_Committee,Status from item where status=? AND year =?"
    const year = new Date().getFullYear();
    const status = req.params.status;
    con.query(sql, [status, year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});
// UPDATE item,year_user SET item.Status=? where item.Asset_Number=? AND year_user.Email_user=?
// For print barcode or QR code of item
app.get("/item/forPrintQRcode_Barcode/:Email_Committee", function (req, res) {
    const sql = "select Asset_Number, Asset_Description, Received_date, Department, year,status, image from item where year=? and Email_Committee=?;"
    const year = new Date().getFullYear();
    const Email_Committee = req.params.Email_Committee;
    con.query(sql, [year, Email_Committee], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load some info of item of landing1
app.get("/landing1/showSomeInfo", function (req, res) {
    const sql = "select Asset_Number,Asset_description,Received_date,Department,Image from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load all info of item of landing1
app.get("/landing1/showAllInfo", function (req, res) {
    const sql = "select Asset_Number,Status,Model,Location,Original_value,Email_Committee,Cost_center,Serial,Date_Upload,Asset_description,Received_date,Department,Image from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load some info of item of landing2
app.get("/landing2/showSomeInfo", function (req, res) {
    const sql = "select Asset_Number,Status,Model,Cost_center,Received_date,Department,Image from item"

    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load item number all in database
app.get("/item/numberAll", function (req, res) {
    const year = new Date().getFullYear();
    const sql = "SELECT count(status) AS 'Numbers_of_Inspected_Item' FROM item WHERE Year = ?"
    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.send(result)
        }
    })
});

// Load date and time of job
app.get("/dateTime/showDateTime", function (req, res) {
    const year = new Date().getFullYear();
    const sql = "select * from date_check where years = ?"

    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Load info of main datatable page
app.get("/maindataTable/info/:status", function (req, res) {
    const sql = "select Image,Asset_Description,Asset_Number,Model,Serial,Location,Received_date,Original_value,Cost_center,Room,Department,Vendor_name,Date_Upload,Date_scan,Email_Committee,Status,Date_Scan from item where year=? and status=?"
    const year = new Date().getFullYear();
    const status = req.params.status;
    con.query(sql, [year, status], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Edit status of item
app.put("/item/edit", function (req, res) {
    const Status = req.body.Status;
    const Asset_Number = req.body.Asset_Number;
    const Email_user = req.body.Email_user;
    const sql = "UPDATE item,year_user SET item.Status=? where item.Asset_Number=? AND year_user.Email_user=?;"
    con.query(sql, [Status, Asset_Number, Email_user], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        }
        else {
            res.send("แก้ไขข้อมูลเรียบร้อย");
        }
    })
});

// Load info of all user of manage user page
app.get("/manageUser/showAllUser/:year", function (req, res) {
    const year = req.params.year;
    const sql = "select year,Email_user,Email_assigner,role from year_user WHERE year=?"

    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

// Add info of new user in manage user page
app.post("/manageUser/add/:Email_user/:Email_assigner/:role", function (req, res) {
    const year = new Date().getFullYear();
    const Email_user = req.params.Email_user;
    const Email_assigner = req.params.Email_assigner;
    const role = req.params.role;

    const sql = "INSERT INTO year_user(year,Email_user,Email_assigner,role) VALUES (?,?,?,?)";
    con.query(sql, [year, Email_user, Email_assigner, role], function (err, result, fields) {
        if (err) {
            console.error(err.message);
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
            return;
        }
        // get inserted rows
        const numrows = result.affectedRows;
        if (numrows != 1) {
            console.error("Error");
            res.status(500).send("ไม่สามารถเพิ่มข้อมูลได้");
        }
        else {
            res.send("เพิ่มข้อมูลเรียบร้อย");
        }

    });
});

// Load item info landing 2
app.get("/item5/:Asset_Number", function (req, res) {
    const sql = "SELECT Image,Asset_Number,Model,Serial,Location,Received_date,Asset_Description,Room,Original_value,Cost_center,Department,Vendor_name,Date_Upload,Date_scan,Email_Committee,Status,Date_Scan FROM `item` WHERE `Asset_Number` =? AND year =?"
    const year = new Date().getFullYear();
    const Asset_Number = req.params.Asset_Number;
    con.query(sql, [Asset_Number, year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.json(result)
        }
    })
});

app.get("/numberitem", function (req, res) {
    const year = new Date().getFullYear();
    const sql = "SELECT count(Asset_Number) AS numofitem FROM item WHERE Year = ?"
    con.query(sql, [year], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        } else {
            res.send(result)
            
        }
    })
});

// Insert Work Time
app.post("/dateTime/insertTime/:Date_start/:Date_end", function (req, res) {
    // ฟิค years ไว้ใน database ทำให้ไม่สามารถใส่ปีซ้ำได้
    const years = new Date().getFullYear();
    const Date_start = req.params.Date_start;
    const Date_end = req.params.Date_end;

    const sql = "INSERT INTO date_check(years,Date_start,Date_end) VALUES (?,?,?)";
    con.query(sql, [years, Date_start, Date_end], function (err, result, fields) {
        if (err) {
            console.error(err.message);
            res.status(503).send("ไม่สามารถเพิ่มข้อมูลได้ เนื่องจากมีข้อมูลของปีนี้อยู่ในระบบแล้ว");
            return;
        }
        // get inserted rows
        const numrows = result.affectedRows;
        if (numrows != 1) {
            console.error("Error");
            res.status(500).send("ไม่สามารถเพิ่มข้อมูลได้");
        }
        else {
            res.send("เพิ่มข้อมููลเรียบร้อย");
        }

    });

});

// Update date
app.put("/dateTime/updateTime/:Date_start/:Date_end", function (req, res) {
    const years = new Date().getFullYear();
    const Date_start = req.params.Date_start;
    const Date_end = req.params.Date_end;
    const sql = "UPDATE date_check SET Date_start=?, Date_end=? where years=?;"
    con.query(sql, [Date_start, Date_end, years], function (err, result, fields) {
        if (err) {
            res.status(503).send("เซิร์ฟเวอร์ไม่ตอบสนอง");
        }
        else {
            res.send("แก้ไขข้อมูลเรียบร้อย");
        }
    })
});


app.use("/img", express.static(path.join(__dirname, 'img')));
app.use("/assets", express.static(path.join(__dirname, 'assets')));
app.use("/JS_Files", express.static(path.join(__dirname, 'JS_Files')));
// ========== Starting server ============
const PORT = 35000
app.listen(PORT, function () {
    console.log("Server is running at " + PORT);
});