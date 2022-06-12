const express = require("express");
const router = express.Router();
const validateFields = require("../helpers/validateFields");
//const {verifyToken}=require("../validators/verifyToken")
const{verify}=require("../validators/verify")
var jwt = require("jsonwebtoken");
const passport = require("passport");
require("../passportConfig")(passport);
const Students = require("../database/models/students");
const bcrypt = require("bcryptjs");
const {addStudents,getStudents,getStudentsId,addMateriaStu,editStudents,postImage}=require("../controllers/students.controller")

router.post("/addStudents",addStudents);
router.get("/getStudents",getStudents);
router.get("/getStudent/:id",getStudentsId)
router.post("/addMateriaStu/:id",addMateriaStu)
router.put("/editStudents/:id",editStudents)
router.post("postImage",postImage)

// Routes STUDENTS
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          // res.send("Successfully Authenticated");
           
          // function generateAccessToken(user) {
          //       return jwt.sign(user.id, "secret")
          //     }
          //   const accessToken = generateAccessToken(user)
          // res.status(200).json({
          //   msg : "Successfully Authenticated",
          //   token : accessToken,
          //   data : req.user
          // });
          
          let data ={
            id : user._id
          }
          if (err) throw err;
            function generateAccessToken(user) {
              return jwt.sign(data, "secret",{expiresIn:"60s"})
            }
          const accessToken = generateAccessToken(user)
          res.status(200).json({
            msg : "Successfully Authenticated",
            token : accessToken,
            data : req.user
          });
          //console.log(req.user);
        });
      }
    })(req, res, next);
  });
  
  router.post("/register", (req, res) => {
    Students.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new Students({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });
  
module.exports = router;