var Userdb = require('../model/model');

// Create an save New User

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    // New user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    }); 

    // save Users in the Database
    user.save().then(data=>{
        res.status(200).redirect('/add-user');
    }).catch(err=>{
        res.status(500).send({message:err.message || "Some error occured while createting a create operation"});
    })

 }

// retrive and return all users/ retrive and return a single user
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id).then((data)=>{
            if(!data){
                res.status(404).send({message:"Not found user with id " + id});
            }else{
                res.status(200).send(data);
            }
        }).catch(e =>{
            res.status(500).send({message:e.message || "Error Occurred while retriving user information"});
        }).catch(err => res.status(500).send({message:"Error Retriving user with id"+id}));
    }else{

        Userdb.find().then((data)=>{
            res.status(200).send(data)
        }).catch(e =>{
            res.status(500).send({message:e.message || "Error Occurred while retriving user information"});
        })
    }
}

// update a new identified user by user id

exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Data to update can not be empty"});
    }
   
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id} Maybe user Not Found`});
        }else{
            res.status(200).send(data);
        }
    }).catch(err => res.status(500).send({message:err.message || "Error Update User Informations"}));
}

//  Delete a user with Specified user id the request
exports.delete = (req,res)=>{
    id = req.params.id;
    if(!id){
        res.send(400).send("Id Not Found");
    }
    
    Userdb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send("Account Not Found");
        }else{
            res.status(200)
            
        }
    }).catch(e => res.status(500).send({message:e.message ||"Data Canot Delete"}));

}