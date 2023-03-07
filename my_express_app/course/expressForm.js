const express = require('express');
const app = express();
const path = require('path')
PORT = 3000;

app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug');
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) =>{
    res.render('index');
});

app.post('/form-submit',(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    res.send(`Hey ${username} Your Email is ${email}`)
})

app.listen(PORT,()=>{
    console.log('server is running http://localhost:3000')
})