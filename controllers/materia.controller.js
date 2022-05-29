const express = require("express")
const Materia = require('../database/models/materia');

const addMateria = async (req, res, next) => {

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

const getMateria = async (req, res, next) => {
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
}

const editMateria = async (req, res, next) => {
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

}

module.exports = {
    addMateria,
    getMateria,
    editMateria
}