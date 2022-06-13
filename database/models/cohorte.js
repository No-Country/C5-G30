const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CohorteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // description: String,
  students: [
    {
      type: Object,
      ref: "student",
    },
  ],
  nameTeacher: {
    type: String
  },
  materias:[{
    type:Schema.Types.ObjectId,
    ref:"Materia"
  }],
  cantStudenst:{
    type: Number
  }
});

const cohorteModel = mongoose.model("Cohorte", CohorteSchema);

module.exports = cohorteModel;
