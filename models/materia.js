const mongoose=require("mongoose")
const {Schema}=mongoose


const materia=new Schema({
    code:{type:String,rquire:true},
    name:{type:String,rquire:true},
    nota:{type:Number,require:true},
    profesor:[{
       type:Schema.Types.ObjectId,
       ref:"Profesor"
    }]
})

module.exports=mongoose.model("Materia",materia)