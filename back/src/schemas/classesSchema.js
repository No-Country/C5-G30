import { Schema } from "mongoose";

const ClassesSchema = new Schema({
    name: {},
    description: {},
    teacherId: {},
    studentsId: {}
});

module.exports = mongoose.model('classes', ClassesSchema);