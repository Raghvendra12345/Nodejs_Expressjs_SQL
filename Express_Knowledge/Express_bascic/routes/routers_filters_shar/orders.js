const express=require("express")


const routes=express.Router()

routes.get("/",(req,res)=>{
    res.send("Orders is being placed")
})

routes.post("/",(req,res)=>{
    res.send("Orders is being Created")
})

module.exports=routes;