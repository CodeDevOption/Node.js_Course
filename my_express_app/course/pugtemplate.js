const express = require('express');
const app = express();
const path = require('path')
PORT = 3000;


app.set('view engine','pug');

app.get('/',(req,res) =>{
    res.render('index');
});


app.listen(PORT,()=>{
    console.log('server is running http://localhost:3000')
})