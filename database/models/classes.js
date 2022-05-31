const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ClassesSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    materiaId: {
        type: Object.SchemasTypes.Id,
        ref: 'materia',
        require: true
    },
    studentId: {
        type: Object.SchemasTypes.Id,
        ref: 'student',
        require: true
    },
    date: Date
}
)

const Classes = mongoose.model('Classes', ClassesSchema);

module.exports = Classes;