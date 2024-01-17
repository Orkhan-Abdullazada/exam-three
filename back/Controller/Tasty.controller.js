const {Tasty}=require("../Models/tasty.model")
const TastyController={
    getAll:async(req,res)=>{
        try{
            const target=await Tasty.find({})
            res.send(target)

        }catch(error){
            res.send("item is not found")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const tasty= await Tasty.findById(id)
            res.send(tasty)

        }catch(error){
            res.send("item is not found")
        }
    },
    post:async(req,res)=>{
        try{
            const {name,desc,image,price}=req.body
            const NewTasty=new Tasty({name,desc,image,price})
            await NewTasty.save()
            res.send("item created")

        }catch(error){
            res.send("item is not found")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Tasty.findByIdAndDelete(id)
            res.send("deleted item")
        }catch(error){
            res.send("item is not found")
        }
    },
}
module.exports={TastyController}