const express = require('express');
const app = express();
const session = require('express-session');
PORT = 3000;

app.use(session({
    secret:"1x2c3c",
    resave:true,
    saveUninitialized:true,
}));

app.get('/',(req,res) =>{
    req.session.name = 'Lahiru'
    return res.send('Session is Set')
})

app.get('/session',(req,res) =>{
    const name = req.session.name;
    return res.send(name);
})
app.get('/destroy',(req,res) =>{
    req.session.destroy();
    console.log('Session is Destroyd');
})

app.listen(PORT,()=>{
    console.log('server is running http://localhost:3000')
})