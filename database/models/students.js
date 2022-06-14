const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const students = new Schema({
    firstName: { type: String, require: false },
    lastName: { type: String, require: false },
    dateNac: { type: Date, require: false },
    dni: { type: Number, require: false },
    address: { type: String, require: false },
    country: { type: String, require: false },
    province: { type: String, require: false },
    username: { type: String, require: true },
    phone: { type: Number, require: false },
    materias: [{
        type: Schema.Types.ObjectId,
        ref: 'Materia'
    }],
    status: { type: Boolean, require: false },
<<<<<<< HEAD
    cohorte:{type:String,reuire:false},
    password:{type:String,require:true}
=======
    cohorte: { type: String, reuire: false },
    password: { type: String, require: false },
    imagen: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    dateReg: {
        type: Date, default: Date.now
    }
>>>>>>> 97b15048df46c0b234aa267ec5ee5f6d5d35278e
})

module.exports = mongoose.model('Students', students);

