const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const students = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    dni: { type: Number, require: true },
    address: { type: String, require: true },
    country: { type: String, require: true },
    province: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    materias: [{
        type: Schema.Types.ObjectId,
        ref: 'Materia'
    }],
    status: { type: Boolean, require: true },
    cohorte:{type:String,reuire:true}
})

module.exports = mongoose.model('Students', students);

