const express = require('express');
const morgan = require('morgan');
const {v4:uuidv4} = require('uuid');
const path = require('path');
const fs = require('fs');
const app = express();

morgan.token('id',(req)=>{
    return req.id;
})

morgan.token('params',(req,res,params)=>{
    return "UserToken";
})

app.use((req,res,next)=>{
    req.id = uuidv4();
    next();
})

const accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})

app.use(morgan(':id :params'))
app.use(morgan(':id :method :status :url "HTTP/:http-version"',{stream:accessLogStream}))

app.get('/',(req,res) =>{
    res.end("Morgan App");
})

app.listen(3000,() =>{
    console.log('server is running http://localhost:3000');
})