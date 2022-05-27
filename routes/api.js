const express = require('express');
const Teacher = require('../database/models/teacher');
const Materia = require('../database/models/materia');
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

try{
    const materia = await Materia.findById(req.params.id)
    console.log(materia.name,"--->nombre")
    teacher.mat = materia
    if(teacher.materias){
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
catch(error){
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
    
    const buscado = await Teacher.findById(req.params.id)
    res.send(buscado)
    res.json({
        buscado: buscado
    })

})

/////////////////////////MATERIA//////////////////////////////
router.get('/getMateria', async (req, res, next) => {
    try{
      await Materia.find({},function(err,materias){
      Teacher.populate(materias,{path:"teachers"},function(err,materias){
        res.json({
            materias:materias
        })
      })
    })
    }catch(err){
      console.log(err)
    }
})

router.post('/addMateria', async (req, res, next) => {

    const {registro,name,campo} = req.body
    const materia = new Materia({
        registro:registro,
        name: name,
        campo: campo
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