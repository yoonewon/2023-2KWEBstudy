const fs =require('fs');
const path = require('path');
const util = require('util');

const readdirAsync =util.promisify(fs.readdir);
const statAsync = util.promisify(fs.stat);


const searchDirectory = async directory =>{
    try{
    const files = await readdirAsync(directory);

    files.forEach(async (file) =>{
        const filePath=path.join(directory,file);
        const fileStats= await statAsync(filePath);

        if(fileStats.isDirectory()){
            await searchDirectory(filePath);
        } 
        else if (path.extname(filePath) ==='.js'){
            console.log(filePath);
        }
    });

} catch(error){
    console.error(error);
}
}
searchDirectory('2023-2KWEBSTUDY/HW/Chapter2/exercise 2.2/test');
