const mongoose=require("mongoose")

const Tasty=mongoose.model("tasty",new mongoose.Schema({
    name:String,
    desc:String,
    price:String,
    image:String
}))
module.exports={Tasty}