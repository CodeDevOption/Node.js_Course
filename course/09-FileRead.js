const fs = require('fs');

fs.readFile('Text.txt','utf-8',(err,data)=>{
    if(err)  throw err;
    let ditails = [];
    data.split(';').map((res)=> ditails.push(eval('({'+ res + '})')));
    console.log(ditails);
    ditails.map((res)=> console.log(res.id))
})

// const data = fs.readFileSync('Text.txt',{encoding:'utf-8',flag:'r'});
// console.log(data);

// fs.stat('./',(err,stat)=>{
//     if(err){
//         console.log(err);
//         return
//     }

//     console.log(stat.isFile());
//     console.log(stat.isDirectory());
// })