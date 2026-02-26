const express=require("express")
const app=express()
let port=3000

app.use(express.json())


//GET all users
app.get("/home",(req,res)=>{
    res.send("Hello World")
})
app.get("/about",(req,res)=>{
    res.send("About")
})

// app.get("/contact/1",(req,res)=>{
//     res.send("Hello from Contact page for user 1")
// })

// app.get("/contact/2",(req,res)=>{
//     res.send("Hello from Contact page for user 2")
// })

// app.get("/contact/3",(req,res)=>{
//     res.send("Hello from Contact page for user 3")
// })

app.get("/contact/:userId",(req,res)=>{
    const id=req.params.userId
    const name=req.query.name
    const age=req.query.age
    res.send(`Hello from Contact page for user ${id} ${name},${age}`)
})



// app.post("/products",(req,res)=>{
//     res.send("A new product has been added")
// })

// app.get("/categories",(req,res)=>{
//     res.send("Here is the list of all categories")
// })
// app.post("/categories",(req,res)=>{
//     res.send("A new category has been created")
// })

// app.use((req,res)=>{
//     res.status(404).send('<h1>404 - Page Not Found</h1>')
// })


//Start thes server
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})