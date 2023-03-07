const express = require('express');
const app = express();
const cookie = require('cookie-parser');
PORT = 3000;

app.use(cookie());

const user ={
    name:'lahiru',
    age:20,
    status:'single'
}

app.get('/',(req,res) =>{
    res.cookie('user',user);
    res.send('Cookie Add Here');
});
app.get('/getuser',(req,res) =>{
    res.send(req.cookies);
});
app.get('/logout',(req,res) =>{
    res.clearCookie('user');
    res.send('User Logout Successfuly');
});



app.listen(PORT,()=>{
    console.log('server is running http://localhost:3000')
})