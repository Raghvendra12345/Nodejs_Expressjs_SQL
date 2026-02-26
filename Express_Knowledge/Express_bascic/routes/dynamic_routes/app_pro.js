const express=require("express")
const app=express()
let port=3000
app.use(express.json())

//GET all users
app.get("/home",(req,res)=>{
    res.send("Hello Express World")
})
app.get("/about",(req,res)=>{
    res.send("Hello About")
})

app.get("/welcome/:username",(req,res)=>{
    const name=req.params.username
    const role=req.query.role
    
    res.send(`Welcome ${name} your role is ${role}`)
})

//Start thes server
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})