const multer = require("multer");
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/usercontroller.js");
// const storage = multer.diskStorage({
//     destination(req, file, callback){
//         callback(null, 'v1/uploads/logo')
//     },
//     filename(req,file,callback){
//         callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// })

router.route("/").post(register);
router.route("/login").post(login);

module.exports = router;
