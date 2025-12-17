const rateLimiter=(option)=>{
    const {limit,windowMs}=option

//store ip Adress
const clients=new Map()

return(req,res,next)=>{
    const ip=req.ip;
    const currentTime=Date.now()

    if(!clients.has(ip)){
        clients.set(ip,{
            count:1,
            startTime:currentTime,
        });
        return next;
    }
    const clientData=clients.get(ip)


    // check if time window expired
    if(currentTime-clientData.startTime>windowMs){
        clientData.count=1;
        clientData.startTime=currentTime
        return  next();
    }


    // check request limit
    if (clientData.count >= limit) {
      return res.status(429).json({
        message: "Too many requests. Please try again later from sandeep.",
      });
    }
 clientData.count++;
    next();
}
}

export default rateLimiter