const express=require("express")
const app=express()
app.use(express.json())
const port=4000


app.get("/products",(req,res)=>{
    res.send("Here is the list of all products")
})
app.post("/products",(req,res)=>{    
    res.send("A new product has been added")
})

app.get("/categories",(req,res)=>{
    res.send("Here is the list of all categories")
})
app.post("/categories",(req,res)=>{    
    res.send("A new category has been created")
})


// app.get("/welcome/:name",(req,res)=>{
//     const name=req.params.name
//     const role=req.query.role
//     res.send(`This role is for ${name} and his role is ${role}`)
// })
const logger=(req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`)
}
app.use(logger)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
