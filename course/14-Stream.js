const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    // fs.readFile('data.json',(err,data) =>{
    //     res.end(data);
    // })

    const stream = fs.createReadStream('data.json');
    stream.pipe(res);
})

server.listen(3000,()=>{
    console.log('server is lesten on Port http://localhost:3000')
})