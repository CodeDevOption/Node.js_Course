const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use((req,res,next)=>{
    console.log(`Date is ${Date.now()}`); // This fuction exicute all the refresh time
    next();
})

app.use((req,res,next)=>{
    let filepath = path.join(__dirname,'src',req.url);
    fs.stat(filepath,(err,fileinfo)=>{
        if(err){
            next();
            return
        }
        if(fileinfo.isFile()){
            res.sendFile(filepath);
        }else{
            next();
        }
    });
});

app.use((req,res)=>{
    res.statusCode = 404;
    res.end('Page Not Found')
})
app.listen(3000,()=>{
    console.log("App Running on http://localhost:3000");
});