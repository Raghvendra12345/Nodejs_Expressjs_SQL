
const http=require('http')
const routes=require("./routes")
// routes.anotherfunction()
// const server=http.createServer(routes)
routes.testfunction()
const server=http.createServer(routes.handler)
server.listen(3000,()=>{
    console.log("Server is running Fine")
})