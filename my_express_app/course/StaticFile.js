const express = require('express');
const app = express();
const path = require('path')

const publicpath = path.resolve(__dirname,'public');

app.use(publicpath,express.static('static'))

app.get('/',(req,res) =>{
    res.send('Static Files '+ publicpath)
})

app.listen(PORT,()=>{
    console.log('server is running http://localhost:3000')
})