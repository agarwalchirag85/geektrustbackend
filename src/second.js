const fs=require('fs');


// fs.readFile('D:/allproject/tamesofthrones/src/inputtxt.txt','utf8',(err,data)=>{
//     if(err)
//     {
//         //or thorw error
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     return new Promise ((resolve,reject)=>{
//         resolve("sucess")
    
//     });
        
//     }
// });


function readfile (filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename,'utf8', function(err, data){
            if (err) 
                reject(err); 
            else 
                resolve(data);
        });
    });
};


// const datavalue=readfile('D:/allproject/tamesofthrones/src/inputtxt.txt').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });


const newfn= async(filename)=>{
    try{
    const message=await readfile(filename) ;
    console.log(message);
    }
    catch(e)
    {
        console.log(e);
    }
}
newfn('D:/allproject/tamesofthrones/src/inputtxt.txt');