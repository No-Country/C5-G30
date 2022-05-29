const express=require("express")
const Materia=require("../database/models/materia")
const Teacher = require('../database/models/teacher');
const router=express.Router()
const {addMateria,getMateria,editMateria}=require("../controllers/materia.controller")

/////////////////////////MATERIA//////////////////////////////
router.get('/getMateria', getMateria )

router.put("/editMateria/:id", editMateria)

router.post('/addMateria', addMateria)

module.exports=router