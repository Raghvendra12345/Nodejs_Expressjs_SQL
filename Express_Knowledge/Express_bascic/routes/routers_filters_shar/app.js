const express=require("express")
const app=express()
const port=3000

const orderRoutes=require("./orders")
const userRoutes=require("./users")
const bookRoutes=require("./books")

app.use("/orders",orderRoutes)
app.use("/users",userRoutes)
app.use("/books",bookRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})