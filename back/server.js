const express=require("express")
const app=express()
const TastyRouter=require("./Router/tasty.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 8080
app.use(express.json())
mongoose.connect("mongodb+srv://orxan:orxan123@orxanabdullayef.klfqe1s.mongodb.net/").then(res=>{
    console.log("connected to mongodb")
})
app.use("/tasty",TastyRouter)

app.listen(PORT,()=>{
    console.log("back running on 8080")
})
