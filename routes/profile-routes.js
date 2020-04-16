const router = require("express").Router();

const authCheck = (req,res,next) => {
//    if not yet login
    if(!req.user){
        res.redirect("/auth/login");
    }else{
        next();
    }
};


router.use(authCheck);
// show profule page
// router.get("/info", (req,res) => { 
//     // console.log(req.user);
//     res.send({user: req.user});
// });
router.get("/infouser", function (req, res) {
            // console.log(req.user);
            res.send(req.user);
});

module.exports = router;