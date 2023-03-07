const express = require('express');
const app = express();
const path = require('path')

const publicpath = path.resolve(__dirname,'public');

const PORT = 3000;

const data = {
    id:'01',
    name:'lahiru'

}

app.use(publicpath,express.static('static'))

app.get('/',(req,res) =>{
    res.sendFile(publicpath + '/index.html')
});
app.get('/about',(req,res) =>{
    res.send('About Page ')
});
app.get('/contact',(req,res) =>{
    res.json(data);
});
app.get('/service',(req,res) =>{
    res.send('Services Page ')
    res.json(data);
});

app.listen(PORT,()=>{
    console.log('server is running http://localhost:3000')
})