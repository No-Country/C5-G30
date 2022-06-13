const express = require("express")
const Students = require("../database/models/students");
const Materia = require('../database/models/materia');
const Image = require('../database/models/image');
const jwt = require('jsonwebtoken')
const fileUpload=require("express-fileupload")


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
  const { firstName, lastName, dni, address, country, province, username, phone, status, cohorte} = req.body;
  
  const newStudent = {
    firstName: firstName,
    lastName: lastName,
    dni: dni,
    address: address,
    country: country,
    province: province,
    username: username,
    phone: phone,
    status: status,
    cohorte: cohorte,
    //imagen:idImage
  }
  //const imagen=req.files.variable

  try {
    await Students.findByIdAndUpdate(req.params.id,newStudent,{ userFindModify: false })
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
        res.status(200).json({
          students: students
        })
      })
      // Image.populate(students, { path: "imagen" }, function (err, student) {
      //   res.status(200).json({
      //     student: student
      //   })
      // })
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
        res.status(200).json({
          students: students
        })
      })
    })
  } catch (error) {
    console.log(error,"no existe el buscado")
    // res.status(204).json({
    //    error:"ususario no encontrado"
    // })
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
  if(materia&&students){
    students.materias.push(materia)
    await students.save()
    res.status(200).json({
      msg : "Materia Asignada"
    });
  }else
  res.status(204).json({
    msg:"materia o estudiante no encontrado"
  })
}



module.exports = {
  addStudents,
  getStudents,
  getStudentsId,
  addMateriaStu,
  editStudents
}