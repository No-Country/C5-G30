const Classes = require('../database/classes')
const httpStatus = require('../helpers/httpStatus');

class ClassesController {

  static async getAllClasses(req, res) {
    try {
      const allClasses = await Classes.findAll();
      res.status(httpStatus.OK).json(allClasses);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' });
    }
  }
  static async getClassesById(req, res) {
    const { title } = req.params;
    try {
      const classesName = await Classes.findOne({ title: title });
      res.status(httpStatus.OK).json(classesName);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' });
    }
  }


  static async newClasses(req, res) {
    try {
      const newClassName = await Classes.create(req.body);
      res.status(httpStatus.CREATED).json(newClassName);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' });
    }
  }

  static async updateClasses(req, res) {
    try {

    }
    const updateClass = await Classes.findOneAndUpdate({ title: req.params.title }, req.body)

  }

  static async deleteClasses() {

  }
}

module.exports = ClassesController;
