
const express = require('express');
const Teacher = require('../database/models/teacher');
const Materia = require('../database/models/materia');
const Cohorte = require("../database/models/cohorte")
const router = express.Router();

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
module.exports = router;