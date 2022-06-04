const express = require("express");
const router = express.Router();
const validateFields = require("../helpers/validateFields");

const {addStudents,getStudents,getStudentsId,addMateriaStu}=require("../controllers/students.controller")

router.post("/addStudents",addStudents);
router.get("/getStudents",getStudents);
router.get("/getStudent/:id",getStudentsId)
router.post("/addMateriaStu/:id",addMateriaStu)
module.exports = router;