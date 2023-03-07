const axios = require('axios');

// Home Route
exports.homeRoutes = (req,res)=>{
    axios.get('http://localhost:3000/api/users').then((response)=>{
        res.render('index',{users:response.data});
    }).catch(err => {
        res.status(404).send("Data Not Found");
    })
}

// Add user Route
exports.add_user = (req,res)=>{
    res.render('add_user');
}

// update-user  Route
exports.update_user = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}}).then((data)=>{
        res.render('update_user',{user:data.data});
    }).catch(e => res.status(404).send({message:"Data Not Found"}));
}

