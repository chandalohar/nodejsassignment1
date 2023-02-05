let express = require("express");
let router = express.Router();
let loginController = require("../controller/loginController");


router.post("/signIn",loginController.signIn);
router.post("/signUp",loginController.signUp);

module.exports=router;