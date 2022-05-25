const express = require("express");
const router = express.Router();
const validateFields = require("../helpers/validateFields");
const { check } = require("express-validator");
const StudentController = require("../controllers/students.controller");

router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getStudentById);
router.get("/?=", StudentController.queryOptions);

router.post("/signup", StudentController.newStudent);
router.post("/signin", StudentController.loginStudent);

router.patch("/:id", StudentController.updateStudent);

router.delete("/:id", StudentController.deleteUser);

module.exports = router;
