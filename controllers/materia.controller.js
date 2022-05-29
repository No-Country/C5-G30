const express=require ("express")
const Materia=require('../database/models/materia');

const addMateria=async (req, res, next) => {

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
}




module.exports={
    addMateria
}