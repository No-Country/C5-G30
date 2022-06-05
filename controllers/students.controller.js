const express = require("express")
const Students = require("../database/models/students");
const Materia = require('../database/models/materia');

const addStudents = async (req, res, next) => {
  const { firstName, lastName, dni, address, country, province, email, phone, status, cohorte } = req.body;
  const students = new Students({
    firstName: firstName,
    lastName: lastName,
    dni: dni,
    address: address,
    country: country,
    province: province,
    email: email,
    phone: phone,
    status: status,
    cohorte: cohorte
  })

  try {
    await students.save()
    res.send(students)
    res.json({
      status: "students created"
    })
  } catch (error) {
    next(error)
  }
}

const getStudents = async (req, res) => {
  const students = await Students.find()
  //res.send(students)
  // res.json({
  //   students: students
  // })
  try {
    await Students.find({}, function (err, students) {
      Materia.populate(students, { path: "materias" }, function (err, students){
        res.json({
          students: students
        })
      })
    })
  } catch (error) {
    console.log(error)
  }

}

const getStudentsId = async (req, res) => {
  // const student = await Students.findById(req.params.id)
  // res.json({
  //   student: student
  // })

  try {
    await Students.findById(req.params.id,{}, function (err, students) {
      Materia.populate(students, { path: "materias" }, function (err, students){
        res.json({
          students: students
        })
      })
    })
  } catch (error) {
    console.log(error)
  }


}


const addMateriaStu = async (req, res) => {
  await Students.findById(req.params.id)

  const { idMateria } = req.body
  const materia = await Materia.findById(idMateria)
  const students = await Students.findById(req.params.id)
  students.materias.push(materia)
  await students.save()

  res.json({
    status: "materia asignada"
  })
}

module.exports = {
  addStudents,
  getStudents,
  getStudentsId,
  addMateriaStu
}