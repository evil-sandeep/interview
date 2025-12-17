import fs from 'fs/promises'

const writeFileExample=async()=>{
    try{
        await fs.writeFile(
            'data.txt',
            'hello this is write on using node fs write file ',
            'utf8'
        );
        console.log('File written successfully')
    }catch(error){
        console.log('some error is occoured ' + error)
    }
}

const readdFile=async()=>{
    try{
          const data=await fs.readFile('data.txt','utf8')
    console.log('File content ', data)
    }catch(e){
        console.log('file not read ' ,e)
    }
  
}

const main=await(()=>{
    writeFileExample()
    readdFile()
})

export default main