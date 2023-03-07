const express = require('express');

const app = express();

app.get('/ping',(req,res)=>{
    res.send("Server Create Sucsessful");
})
app.get('/home',(req,res)=>{
    res.send("This is the Home Page");
})

app.listen(3000,()=> console.log("server is running http://localhost:3000"));