const express = require('express');
const Teacher = require('../models/teacher');
const Materia = require('../models/materia');
const router = express.Router();

const User = require('../models/users')


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

////////////////////////TEACHER//////////////////////////////
router.post("/addTeacher", async (req, res, next) => {

    const { firtsName, lastName, dni, address, country, province, email, phone, status } = req.body;
    const teacher = new Teacher({
        firtsName: firtsName,
        lastName: lastName,
        dni: dni,
        address: address,
        country: country,
        province: province,
        email: email,
        phone: phone,
        status: status
    })
    await teacher.save()
    res.json({
        status:"teacher creado"
    })
    // const materia = await Materia.findById(req.params.id)
    // console.log(materia)
    // teacher.materia = materia
    // await teacher.save()
    // teacher.materias.push(materia)
    // materia.teachers.push(teacher)
    // await materia.save()
    // res.send(teacher)
    // res.json({
    //     status: "teacher creada"
    // })
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

/////////////////////////MATERIA//////////////////////////////
router.get('/getMateria', async (req, res, next) => {
    const materia = await Materia.find()
    console.log(materia)
    res.json({
        materia: materia
    })
})

router.post('/addMateria', async (req, res, next) => {

    const { name} = req.body
    const materia = new Materia({
        name: name
        //nota: nota
    })

    materia.save()
    res.json({
        status:"materia creada"
    })
    // try {
    //     const teacher = await Teacher.findById(req.params.id)
    //     console.log(teacher)
    //     materia.teacher = teacher
    //     await materia.save()
    //     teacher.materias.push(materia)
    //     materia.teachers.push(teacher)
    //     await teacher.save()
    //     res.send(materia)
    //     res.json({
    //         status: "materia creada"
    //     })

    // } catch (error) {
    //     next(error)
    // }
})




module.exports = router;