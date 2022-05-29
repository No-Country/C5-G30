const express=require("express")
const Cohorte=require("../database/models/cohorte")
const Teacher = require('../database/models/teacher');
const Materia = require('../database/models/materia');
const router=express.Router()

const {getCohorte,addCohorte}=require("../controllers/cohorte.controller")


router.post("/addCohorte",addCohorte)
    

router.get("/getCohorte",getCohorte)



module.exports=router