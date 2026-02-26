const express=require("express")


const routes=express.Router()


const students=[
    {id: 1,name:"Alice"},
    {id: 2,name:"Bob"},
    {id: 3,name:"Charlie"},
]

routes.get("/",(req,res)=>{
   const studentnames=students.map(student=>student.name).join(", ")

    res.send(`Students:${studentnames}`)
})

routes.get("/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const studentid=students.find(s=>s.id===id)
    
    if(!studentid){
        res.send("Student not found")
    }

    res.send(`Students:${studentid.name}`)
})


module.exports=routes;