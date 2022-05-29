const express=require("express")
const Materia=require("../database/models/materia")
const Teacher = require('../database/models/teacher');
const router=express.Router()
const {addMateria}=require("../controllers/materia.controller")

/////////////////////////MATERIA//////////////////////////////
router.get('/getMateria', async (req, res, next) => {
    try {
        await Materia.find({}, function (err, materias) {
            Teacher.populate(materias, { path: "teachers" }, function (err, materias) {
                res.json({
                    materias: materias
                })
            })
        })
    } catch (err) {
        console.log(err)
    }
})

router.put("/editMateria/:id", async (req, res, next) => {
    const { registro, name, campo } = req.body
    const newMateria = {
        registro: registro,
        name: name,
        campo: campo
    }
    try {
        await Materia.findByIdAndUpdate(req.params.id, newMateria, { userFindModify: false })
        res.json({
            status: "materia actualizada"
        })

    } catch (err) {
        console.log(err)
    }

})

router.post('/addMateria', addMateria)

module.exports=router