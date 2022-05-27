const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  fechaEntregada: () => {
    return Date.now();
  },
  fechaFinalizacion: {
    type: Date,
    required: true,
  },
  student: {
    type: Object.SchemaTypes.Id,
    ref: "student",
    required: true,
  },
  nota: Number,
  classes: {
    type: Object.SchemaTypes.Id,
    ref: "classes",
    required: true,
  }

});

const taskModel = mongoose.model("task", TaskSchema);

module.exports = taskModel;
