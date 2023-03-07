const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const bodybarser = require('body-parser');
const morgan = require('morgan');
const router = require('./server/routes/router');

const connectiDB = require('./server/database/connection')

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080
// log requests

// Parse Request to Body-parser
app.use(bodybarser.json());
app.use(bodybarser.urlencoded({extended:true}));

app.use(morgan('tiny'))

// monogoDB Connection 
connectiDB();


// View Engine
app.set('view engine','ejs');

// Static Files load assets
app.use('/assets',express.static(path.join(__dirname,'assets')));

// Root Route
app.use('/',router)


app.listen(PORT,()=>{
    console.log("Server is Running http://localhost:"+PORT);
})