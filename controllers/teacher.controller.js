const express = require('express');
const Teacher = require('../database/models/teacher');
const Materia = require('../database/models/materia');

const getTeacher= async (req, res) => {
 
    const buscado = await Teacher.find()
    res.json({
        buscado: buscado
    })
}

module.exports={
    getTeacher
}