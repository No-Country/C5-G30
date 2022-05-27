const { student } = require("../database/models/students");
const httpStatus = require('../helpers/httpStatus');
const bcrypt = require('bcryptjs');
const checkToken = require('../helpers/checkToken');

class StudentController {
  static async getAllStudents(req, res) {
    const { DNI, fullname, email, password } = req.body;

    const checkDNINameExist = await student.find({ DNI: DNI });

    if (checkDNINameExist) {
      res.status(httpStatus).json({ msg: "Student is already registered" });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    let newStudent = await student.create(req.body);

    res.status(httpStatus).json({ newStudent, checkToken });
  }

  static async getStudentById() {}
  static async queryOptions() {}
  static async newStudent() {}
  static async loginStudent() {}
  static async updateStudent() {}
  static async deleteUser() {}
}

module.exports = StudentController;
