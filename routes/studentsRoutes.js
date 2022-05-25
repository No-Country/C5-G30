const express = require("express");
const router = express.Router();
const validateFields = require("../helpers/validateFields");
const { check } = require("express-validator");
const StudentController = require("../controllers/students.controller");

router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getStudentById);
router.get("/?=", StudentController.queryOptions);

router.post(
  "/signup",
  [
    check("username", "username can not be empty").not().isEmpty(),
    check("email", "It must be a valid email").not().isEmpty().isEmail(),
    check("password", "password can not be empty").not().isEmpty(),
    validateFields,
  ],
  StudentController.newStudent
);

router.post(
  "/signin",
  [
    check("username", "username can not be empty").not().isEmpty(),
    check("email", "It must be a valid email").not().isEmpty().isEmail(),
    check("password", "password can not be empty").not().isEmpty(),
    validateFields,
  ],
  StudentController.loginStudent
);

router.patch("/:id", StudentController.updateStudent);

router.delete("/:id", StudentController.deleteUser);

module.exports = router;
