const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(req.url==='/'){
        //form

        res.setHeader('Content-type','text/html')

        res.end(
            `
            <form action="/message" method="POST">
            <label for="username">Name:</label>
            <input type='text' name="username"></input>
            <button type="submit">Add Bill</button>
            </form>
            `
        );

    }
    else{
        if(req.url=='/message'){
           res.setHeader('Content-type','text/html')

           let dataChunks=[]
           req.on('data',(chunks)=>{
            console.log(chunks)
            dataChunks.push(chunks)
           })
           req.on('end',()=>{
            let combinedbuffer=Buffer.concat(dataChunks)
            console.log(combinedbuffer.toString())
            let value=combinedbuffer.toString().split("=")
            console.log(value)
           })

        }
    }
})
server.listen(3000,()=>{
    console.log("Form server is running")
})