const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    Name:{type:String},
    Email:{type:String,unique:true}
    // Age:{type:Number}
})
module.exports=mongoose.model("evalutiondatas",userSchema)