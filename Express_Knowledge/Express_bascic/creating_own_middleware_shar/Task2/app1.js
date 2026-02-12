
const express=require("express")
const app=express()
let port=3200

app.use(express.json())

let users=[
    {id:1,name:"Alice"},
    {id:2,name:"Bob"},
]

//GET all users
app.get("/users",(req,res)=>{
    res.json(users)
})

//GET a user by Id(using route parameter)
app.get("/users/:id",(req,res)=>{
    const userId=parseInt(req.params.id)
    const user=users.find(u=>u.id===userId)

    if(!user){
        return res.status(404).json({message:"User not found"})
    }

    res.json(user)
})



//POST to add new user
app.post("/users",(req,res)=>{
    const {name}=req.body;
    const newUser={id:users.length+1,name};
    users.push(newUser);
    res.status(201).json(newUser)
    console.log(req.body)
})

//Start thes server
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})