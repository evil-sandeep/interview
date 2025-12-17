import { error } from 'console'
import fs from 'fs/promises'

const reedFile=async()=>{
    try{
         const data=await fs.readFile('data.txt','utf8')
    
    console.log('File read success', data)
    }catch(e){
console.log('An error occoured found ', e)
    }sdsd
   
}
export default reedFile