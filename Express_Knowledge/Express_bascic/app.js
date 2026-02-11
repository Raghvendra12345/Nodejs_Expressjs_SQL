// const http=require("http")
const express=require("express")
const app=express()

app.use((req,res,next)=>{
    console.log("output from middleware 1")
    next();
})

app.use((req,res,next)=>{
    console.log("output from middleware 2")
    res.send("<h1>Hello Sharpenerians</h1>")

})

// const server=http.createServer(app)

// server.listen(3000)
app.listen(3000)