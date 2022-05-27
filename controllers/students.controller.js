const { student } = require("../database/models/students");
const httpStatus = require("../helpers/httpStatus");
const bcrypt = require("bcryptjs");
const checkToken = require("../helpers/checkToken");

class StudentController {

  static async newStudent(req, res) {

    const { DNI } = req.body;
    try {
      const checkDNINameExist = await student.find({ DNI: DNI });

      if (checkDNINameExist) {
        res.status(httpStatus).json({ msg: "Student is already registered" });
      }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    try {

      let newStudent = await student.create(req.body);

      res.status(httpStatus.OK).json({ newStudent, checkToken });

    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }

  static async getStudentById(req, res) {

    const { DNI } = req.body;

    try {
      const oneStudent = await student.findOne({ where: { DNI } });
      if (!oneStudent) {
        res.status(httpStatus.NO_CONTENT).json({ msg: 'Student is not registered' })
      }
      res.status(httpStatus.OK).json({ oneStudent })
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }

  static async getAllStudents(req, res) {

    try {
      const oneStudent = await student.findAll();
      if (!oneStudent) {
        res.status(httpStatus.NO_CONTENT).json({ msg: 'Student is not registered' })
      }
      res.status(httpStatus.OK).json({ oneStudent })
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }

  static async queryOptions() {

  }
  static async loginStudent() {

  }
  static async updateStudent() {

  }
  static async deleteUser() {

  }
}

module.exports = StudentController;
