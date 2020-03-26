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
router.get("/", (req,res) => { 
    // console.log(req.user);
    res.render("profile",{user: req.user});
});

module.exports = router;