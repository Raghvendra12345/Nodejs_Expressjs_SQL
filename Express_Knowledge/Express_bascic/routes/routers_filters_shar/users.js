const express=require("express")


const routes=express.Router()

routes.get("/",(req,res)=>{
    res.send("user given the information")
})

routes.post("/",(req,res)=>{
    res.send("user is making a decision")
})

module.exports=routes;