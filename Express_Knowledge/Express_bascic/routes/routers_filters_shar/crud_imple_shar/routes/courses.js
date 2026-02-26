const express=require("express")


const routes=express.Router()

const coursename=[
    {id: 1,course:"Frontend",description:"HTML,CSS,JS,React"},
    {id: 2,course:"Backend",description:"Node.js,Express,MongoDB"},
    
]

routes.get("/",(req,res)=>{
   const coursenames=coursename.map(course=>course.course).join(", ")

    res.send(`Courses:${coursenames}`)
})

routes.get("/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const courseid=coursename.find(s=>s.id===id)
    
    if(!courseid){
        res.send("Course not found")
    }

    res.send(`Course:${courseid.course},Description:${courseid.description}`)
})




module.exports=routes;