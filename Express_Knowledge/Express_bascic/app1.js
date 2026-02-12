const express=require("express")

const http=require("http")
const app=express()

const server=http.createServer(app)

server.listen(3000,()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests")
})