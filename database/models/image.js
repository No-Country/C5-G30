const mongoose=require("mongoose")
const {Schema}=require("mongoose")

const image=new Schema({

imagen:{
    data:Buffer,
    contentType:String
}

})

module.exports=mongoose.model("Image",image)