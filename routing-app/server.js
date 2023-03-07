const express = require('express');
const app = express();
const router = require('./router');

app.use(express.urlencoded({extended:true}))
app.use('/api',router);


app.get('/',(req,res) =>{
    res.end('Routing app');
});

app.listen(3000,()=>{
    console.log('server on running http://localhost:3000');
})