const mongoose=require("mongoose")
const {Schema}=mongoose


const materia=new Schema({
    code:{type:String,rquire:true},
    name:{type:String,require:true},
    nota:{type:Number,require:true},
    // teachers:[{
    //    type:Schema.Types.ObjectId,
    //    ref:"Teacher",
    //    lastName:String
    // }]
    teachers:{
        type:Schema.Types.ObjectId,
        ref:'Teacher'
     },
     idTeacher:{type:String,require:true}
})

module.exports=mongoose.model('Materia',materia)