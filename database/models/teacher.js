const mongoose=require("mongoose")
const {Schema}=mongoose


const teacher=new Schema({
<<<<<<< HEAD
    
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    dni:{type:Number,require:true},
    address:{type:String, require:true},
    country:{type:String, require:true},
    province:{type:String, require:true},
    email:{type:String, require:true},
    phone:{type:Number, require:true},
    status:{type:Boolean, require:true},
    materias:[{type:String}]
=======
    firstName:{type:String,require:false},
    lastName:{type:String,require:false},
    dni:{type:Number,require:false},
    address:{type:String, require:false},
    country:{type:String, require:false},
    province:{type:String, require:false},
    username:{type:String, require:false},
    phone:{type:Number, require:false},
    status:{type:Boolean, require:false},
    materias:[{type:String}],
    password:{type:String,require:false}
>>>>>>> 4abb532ea6107e2339b92548ddad9cd94e326fba
})

module.exports=mongoose.model('Teacher',teacher)