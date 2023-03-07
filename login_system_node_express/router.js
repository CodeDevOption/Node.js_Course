const express = require('express');
const router = express.Router();

const credential = {
    email:"lahiru@email.com",
    password:'admin@123'
}

router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/router/dashboard')
    }else{
        res.send('Email or Password invalid');
    }
})
router.get('/dashboard',(req,res) =>{
    if(req.session.user){
        res.render('dashboard',{title:'Dashboard',user:req.session.user});
    }
})
router.get('/logout',(req,res) =>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
        }else{
            res.render('index',{title:"Login Page",logout:true})
        }
    });
    
    
})

module.exports = router;