const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ClassesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  students: [
    {
      type: Object,
      ref: "student",
    },
  ],
  professor: {
    type: Object,
    ref: "professor",
  },
});

const classesModel = mongoose.model("classes", ClassesSchema);

module.exports = classesModel;
