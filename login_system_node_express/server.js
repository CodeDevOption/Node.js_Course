const express = require('express');
const router = require('./router');
const path = require('path');
const {v4:uuidv4} = require('uuid');
const session = require('express-session');
const app = express();
const bodyparser = require('body-parser');


const PORT = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src'));
app.use('/src',express.static(path.join(__dirname,'src')))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
app.use('/router',router)

// Home Route

app.get('/',(req,res) =>{
    res.render('index',{title:"Login Page"})
});


app.listen(PORT,() => {
    console.log('server is running http://localhost:3000')
})