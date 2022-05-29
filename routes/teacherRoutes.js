
const express = require('express');
const Teacher = require('../database/models/teacher');
const Materia = require('../database/models/materia');
const Cohorte = require("../database/models/cohorte")
const router = express.Router();
const {getTeacher,getTeacherId,editTeacher,addTeacher}=require("../controllers/teacher.controller")

router.put("/editTeacher/:id", editTeacher)

////////////////////////TEACHER//////////////////////////////
// solicita id de materia
router.post("/addTeacher/:id", addTeacher) 

router.get('/getTeacher', getTeacher)

router.get('/getTeacher/:id', getTeacherId)


module.exports = router;