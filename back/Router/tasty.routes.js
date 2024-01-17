const express=require("express")
const router=express.Router()
const {TastyController}=require("../Controller/Tasty.controller")
router.get("/",TastyController.getAll)
router.get("/:id",TastyController.getById)
router.post("/",TastyController.post)
router.delete("/:id",TastyController.delete)
module.exports=router