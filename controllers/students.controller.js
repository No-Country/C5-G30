const { student } = require("../database/models/students");
const httpStatus = require("../helpers/httpStatus");
const bcrypt = require("bcryptjs");
const Token = require('../middleware/token');
require("dotenv").config();

class StudentController {

  static async newStudent(req, res) {
    try {
      const checkDNINameExist = await student.find({ DNI: req.body.DNI });

      if (checkDNINameExist) {
        res.status(httpStatus).json({ msg: "Student is already registered" });
      }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    try {
      let newStudent = await student.create(req.body);

      const accessToken = Token.create(req.body.DNI, req.body.roleId);

      res.status(httpStatus.OK).json({ newStudent, accessToken });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }

  static async getStudentById(req, res) {
    const { DNI } = req.body;

    try {
      const oneStudent = await student.findOne({ where: { DNI } });
      if (!oneStudent) {
        res
          .status(httpStatus.NO_CONTENT)
          .json({ msg: "Student is not registered" });
      }
      res.status(httpStatus.OK).json({ oneStudent });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }

  static async getAllStudents(req, res) {
    try {
      const oneStudent = await student.findAll();
      if (!oneStudent) {
        res
          .status(httpStatus.NO_CONTENT)
          .json({ msg: "Student is not registered" });
      }
      res.status(httpStatus.OK).json({ oneStudent });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }

  //VER CUALES SERIAN LOS PARAMETROS DE BUSQUEDA
  static async queryOptions() { }


  static async loginStudent(req, res) {
    const { email, password } = req.body;
    try {
      const findStudent = await student.findOne({ email: email });

      if (!findStudent)
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ msg: "User not found" });

      const passwordIsValid = bcrypt.compareSync(
        password,
        findStudent.password
      );

      if (passwordIsValid) {
        const okToken = Token.create(req.body.DNI, req.body.roleId);

        await res.status(200).json({
          fullname: student.fullname,
          email: student.email,
          accessToken: okToken,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async updateStudent(req, res) {
    const { DNI, fullname, address, email, image } = req.body;
    try {
      const oneStudent = await student.updateOne(
        { DNI },
        { fullname },
        { address },
        { email },
        { image }
      );
      if (!oneStudent) {
        res
          .status(httpStatus.NO_CONTENT)
          .json({ msg: "Student is not registered" });
      }

      res.status(httpStatus.OK).json({ oneStudent });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }
  static async deleteStudent(req, res) {
    try {
      const delStudent = await student.deleteOne(
        { email: req.body.email },
        { DNI: req.body.DNI }
      );
      if (!delStudent) {
        res
          .status(httpStatus.NO_CONTENT)
          .json({ msg: "Student is not registered" });
      }
      res
        .status(httpStatus.OK)
        .json({ msg: `${delStudent.fullname} student profile was deleted` });
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
    }
  }
}

module.exports = StudentController;
