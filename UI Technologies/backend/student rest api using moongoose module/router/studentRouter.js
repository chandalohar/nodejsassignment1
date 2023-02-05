let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");


router.post("/storeStudent",studentController.storeStudentInfo);
router.get("/findAllStudents",studentController.findAllStudents);
router.get("/findStudentById/:_id",studentController.findStudentById)
router.patch("/updateStudentGrade",studentController.updateStudentGrade);
router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);
//http://localhost:3000/api/students/findStudentByGrade/A
router.get("/findStudentByGrade/:grade",studentController.findStudentByGrade);
//http://localhost:3000/api/students/findStudentByClass/3rs std
router.get("/findStudentByClass/:class",studentController.findStudentByClass);
//http://localhost:3000/api/students/findStudentByAddress/Banglore
router.get("/findStudentByAddress/:address",studentController.findStudentByAddress);
//http://localhost:3000/api/students/updateStudentAddress
router.patch("/updateStudentAddress",studentController.updateStudentAddress);

//http://localhost:3000/api/students/updateStudentClass
router.patch("/updateStudentClass",studentController.updateStudentClass);


//http://localhost:3000/api/students/deleteStudentByGrade/B
router.delete("/deleteStudentByGrade/:grade",studentController.deleteStudentByGrade);

//http://localhost:3000/api/students/deleteStudentByClass
router.delete("/deleteStudentByClass/:class",studentController.deleteStudentByClass);






module.exports=router;