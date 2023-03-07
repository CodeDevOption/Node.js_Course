const express = require('express');
const app = express();

const myLogger = (req,res,next)=>{
    console.log('Logged');
    next();
}

const serverTime = (req,res,next) =>{
    req.reqTime = Date.now();
    next();
}

app.use(myLogger);
app.use(serverTime);

app.get('/',(req,res)=>{
    res.send(`This is the time ${req.reqTime}`)
});


app.listen(3000,()=>{
    console.log('server is running http://localhost:3000')
})