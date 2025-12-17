import http from'http'

const httpServer=http.createServer((req,res)=>{
    const{url,method}=req;
    if(url==='/' && method==='GET'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('Welcome to home page')
    }

    if(url==='/About'&& method==='GET'){
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end('This is ABout Page')
    }

    res.writeHead(400,{'Content-type':'text/plain '})
    res.end('Not Found ')
})

export default httpServer