const express = require('express');
const Teacher = require('../database/models/teacher');
const Materia = require('../database/models/materia');
const Cohorte = require("../database/models/cohorte")
const router = express.Router();

const User = require('../database/models/users')


router.get('/getTurnos', async (req, res) => {
    const turnos = await User.find();
    console.log("turnos")
    //res.send("hola mundo")
    res.json({
        turnos: turnos
    })
})

router.post("/turno", async (req, res, next) => {
    const { name } = req.body;
    const user = new User({
        name: name
    })
    try {

        await user.save();

        res.send(user)
        res.json({
            status: "user agendado"
        })
    }
    catch (err) {
        next(err);
    }
});


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




router.post('/addMateria', async (req, res, next) => {

    const { registro, name, campo } = req.body
    const materia = new Materia({
        registro: registro,
        name: name,
        campo: campo
    })

    materia.save()
    res.json({
        status: "materia creada"
    })
})


router.post("/addCohorte", async (req, res) => {
    const { name, idteacher, idmateria } = req.body

    try {
        const teacher = await Teacher.findById(idteacher)
        const materia = await Materia.findById(idmateria)

        const nameTeacher = teacher.firstName
        const nameMateria = materia.name

        const cohorte = new Cohorte({
            name: name,
            nameMateria: nameMateria,
            nameTeacher: nameTeacher
        })

        await cohorte.save()
        res.send(cohorte)
        res.json({
            status: "cohorte creado"
        })
    } catch (err) {
        console.log(err)
    }
})

router.get("/getCohorte", async (req, res) => {
    const cohorte = await Cohorte.find()
    res.json({
        cohorte: cohorte
    })
})


module.exports = router;