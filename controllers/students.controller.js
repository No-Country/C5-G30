const express = require("express")
const Students = require("../database/models/students");
const Materia = require('../database/models/materia');
const jwt = require('jsonwebtoken')

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
  }
  catch (error) {
    next(error)
  }
}

const editStudents = async (req, res, next) => {
  const { firstName, lastName, dni, address, country, province, email, phone, status, cohorte } = req.body;
  const newStudent = {
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
  }

  try {
    await Students.findByIdAndUpdate(req.params.id, newStudent, { userFindModify: false })
    res.status(200).json({
      msg : "usuario actualizado"
    });

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
      Materia.populate(students, { path: "materias" }, function (err, students) {
        res.json({
          students: students
        })
      })
    })
  } catch (error) {
    console.log(error)
  }

}


function verifyToken(req,res){
  const bearerHeader=req.headers["authorization"];
  if(typeof bearerHeader !=="undefined"){
    console.log("ingreso aqui")
    const bearerToken=bearerHeader.split(" ")[1];
    req.token=bearerToken;

  }
  else{
    console.log("ingreso en el else")
    return res.status(403).json({error:"no existe token"})
  }
}

const getStudentsId =async (req, res) => {
  // const student = await Students.findById(req.params.id)
  // res.json({
  //   student: student
  // })
  try {
    await Students.findById(req.params.id, {}, function (err, students) {
      Materia.populate(students, { path: "materias" }, function (err, students) {
        res.json({
          students: students
        })
      })
    })
  } catch (error) {
    console.log(error,"no existe el buscado")
  }

  // verifyToken(req,res)
  //   jwt.verify(req.token, "secret", async (err, authData) => {
  //     if (err) {
  //       //res.sendStatus(403)
  //       return res.status(403).json({error:"no existe token o es invalido"})
  //     } else {
  //       try {
  //         await Students.findById(req.params.id, {}, function (err, students) {
  //           Materia.populate(students, { path: "materias" }, function (err, students) {
  //             res.json({
  //               students: students
  //             })
  //           })
  //         })
  //       } catch (error) {
  //         console.log(error,"no existe el buscado")
  //       }
            
  //     }
  //   })  
}



const addMateriaStu = async (req, res) => {
  await Students.findById(req.params.id)

  const { idMateria } = req.body
  const materia = await Materia.findById(idMateria)
  const students = await Students.findById(req.params.id)
  students.materias.push(materia)
  await students.save()

  res.status(200).json({
    msg : "Successfully Authenticated"
  });
}



module.exports = {
  addStudents,
  getStudents,
  getStudentsId,
  addMateriaStu,
  editStudents,
  
}