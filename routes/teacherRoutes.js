
const express = require('express');
const Teacher = require('../database/models/teacher');
const Materia = require('../database/models/materia');
const Cohorte = require("../database/models/cohorte")
const router = express.Router();
const {getTeacher,getTeacherId,editTeacher,addTeacher}=require("../controllers/teacher.controller")
const {validateCreate}=require("../validators/teacher")

//require("../passportConfig2")(passport2);
const passport = require("passport");
require("../passportConfig2")(passport);

router.put("/editTeacher/:id", editTeacher)

////////////////////////TEACHER//////////////////////////////
// solicita id de materia
router.post("/addTeacher/:id", validateCreate,addTeacher) 

router.get('/getTeacher', getTeacher)

router.get('/getTeacher/:id', getTeacherId)


// // Routes TEACHER
// router.post("/loginTeacher", (req, res, next) => {
//   passport2.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No User Exists");
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
        
//         let data ={
//           id : user._id
//         }
//         if (err) throw err;
//           function generateAccessToken(user) {
//             return jwt.sign(data, "secret",{expiresIn:"60s"})
//           }
//         const accessToken = generateAccessToken(user)
//         res.status(200).json({
//           msg : "Successfully Authenticated",
//           token : accessToken,
//           data : req.user
//         });
//         //console.log(req.user);
//       });
//     }
//   })(req, res, next);
// });

// router.post("/registerTeacher", (req, res) => {
//   Teacher.findOne({ username: req.body.username }, async (err, doc) => {
//     if (err) throw err;
//     if (doc) res.send("User Already Exists");
//     if (!doc) {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);

//       const newUser = new Teacher({
//         username: req.body.username,
//         password: hashedPassword,
//       });
//       await newUser.save();
//       res.send("User Created");
//     }
//   });
// });


module.exports = router;