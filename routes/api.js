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

router.post("/turno", async (req, res,next) => {
    const { name} = req.body;
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
catch(err){
    next(err);
}
});

////////////////////////TEACHER//////////////////////////////
router.post("/addTeacher", async (req, res,next) => {
    const { firtsName,lastName,dni,address,country,province,email,phone,status} = req.body;
    const teacher=new Teacher({
    firtsName:firtsName,
    lastName:lastName,
    dni:dni,
    address:address,
    country:country,
    province:province,
    email:email,
    phone:phone,
    status:status
    })
    
    try {
        console.log(teacher)
        await teacher.save()
        res.send(teacher)
        res.json({
          status: "teacher agendado"
        })
    }
    catch(err){
      next(err);
    }
});

router.get('/getTeacher', async (req, res) => {
    const teacher = await Teacher.find();
    console.log("teacher")
    
    res.json({
        teacher: teacher
    })
})

/////////////////////////MATERIA//////////////////////////////
router.get('/getMateria', async(req,res,next)=>{
    const materia=await Materia.find()
    console.log(materia)
    res.json({
        materia:materia
    })
    })

router.post('/postMateria',async (req,res,next)=>{
const {code,name,nota}=req.body
const materia=new Materia({
    code:code,
    name:name,
    nota:nota
})
try{
    console.log(materia)
    await materia.save()
    res.send(materia)
    res.json({
        materia:materia
    })
}catch(error){
    next(error)
}
})




module.exports = router;