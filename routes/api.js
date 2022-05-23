const express = require('express');
const router = express.Router();

const User = require('../models/users')


router.get('/getTurnos', async (req, res) => {

    //si no coloco el async y el await se enviara a la consola respuestas antes
    //de terminar de hacer la bsusqueda por completo de la BD y tirara errores
    //busqueda de todos los registros que existen en la BD
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

module.exports = router;