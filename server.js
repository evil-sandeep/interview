import httpServer from "./simpleHTTPServer.js";
import main from "./fsPromises.js";
import express from 'express'
import rateLimiter from "./rateLimiter.js";
import reedFile from "./fileReadUsingAsyncAwait.js";

const app=express()


app.use(
    rateLimiter({
        limit:5,
        windowMs:60000
    })
)
 app.get('/',(req,res)=>{
    res.send('Hello World')
 })

main()
reedFile()



const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server listen on port ${PORT}`)
})