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


router.put("/editTeacher/:id", async (req, res) => {
    const { firstName, lastName, dni, address, country, province, email, phone, status } = req.body
    const newTeacher = {
        firstName: firstName,
        lastName: lastName,
        dni: dni,
        address: address,
        country: country,
        province: province,
        email: email,
        phone: phone,
        status: status
    }
    try {
        await Teacher.findByIdAndUpdate(req.params.id, newTeacher, { userFindModify: false })
        res.json({
            status: "teacher actualizado"
        })

    } catch (err) {

    }
})
////////////////////////TEACHER//////////////////////////////
// solicita id de materia
router.post("/addTeacher/:id", async (req, res, next) => {

    const { firstName, lastName, dni, address, country, province, email, phone, status } = req.body;
    const teacher = new Teacher({
        firstName: firstName,
        lastName: lastName,
        dni: dni,
        address: address,
        country: country,
        province: province,
        email: email,
        phone: phone,
        status: status
    })

    try {
        const materia = await Materia.findById(req.params.id)
        console.log(materia.name, "--->nombre")
        teacher.mat = materia
        if (teacher.materias) {
            teacher.materias.push(materia.name)
        }
        await teacher.save()
        materia.teachers.push(teacher)
        await materia.save()
        res.send(teacher)
        res.json({
            status: "teacher creada"
        })
    }
    catch (error) {
        next(error)
    }

});

router.get('/getTeacher', async (req, res) => {
    // try {
    //     await Teacher.find({}, function (err, teacher) {
    //         Materia.populate(teacher, { path: 'materias' }, function (err, teacher) {
    //             res.json({
    //                 teacher: teacher
    //             })
    //         })
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    const buscado = await Teacher.find()
    res.json({
        buscado: buscado
    })

})

router.get('/getTeacher/:id', async (req, res) => {

    try {
        const buscado = await Teacher.findById(req.params.id)
        res.send(buscado)
        res.json({
            buscado: buscado
        })
    }
    catch (err) {
        console.log(err)
    }
})

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


router.put("/editTeacher/:id", async (req, res) => {
    const { firstName, lastName, dni, address, country, province, email, phone, status } = req.body
    const newTeacher = {
        firstName: firstName,
        lastName: lastName,
        dni: dni,
        address: address,
        country: country,
        province: province,
        email: email,
        phone: phone,
        status: status
    }
    try {
        await Teacher.findByIdAndUpdate(req.params.id, newTeacher, { userFindModify: false })
        res.json({
            status: "teacher actualizado"
        })

    } catch (err) {

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