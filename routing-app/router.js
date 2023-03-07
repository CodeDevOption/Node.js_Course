const express = require('express');
const router = express.Router();
var accounts = require('./data')


router.get('/accounts',(req,res,)=>{
    res.json({userData:accounts});

});
router.post('/accounts',(req,res,)=>{
    accounts.push(req.body)
    res.json(accounts);

});
router.get('/accounts/:id',(req,res,)=>{
    const accountid = Number(req.params.id);
    const fineuser = accounts.find((account) => account.id === accountid)
    if(fineuser){
        res.json({userData:fineuser}).status(200);
    }else{
        res.status(500).send('Account Not Found');
    }

});

router.put('/accounts/:id',(req,res) =>{
    const accountid = Number(req.params.id);
    const body = req.body;
    const account = accounts.find((account) => account.id === accountid);

    
    if(!account){
        res.status(500).send('Account Not Found');
    }else{
        const index = accounts.indexOf(account);
        accounts[index] = {...account,...body};
        res.send(accounts[index]);
        
    }

})


router.delete('/accounts/:id',(req,res,)=>{
    const accountid = Number(req.params.id);
    const newaccount = accounts.filter((account) => account.id != accountid);
    if(!newaccount){
        res.status(500).send('Account Not Found');
    }else{
        const update = async ()=>{
            accounts = newaccount;
            
        }
        update().then(()=> res.send(accounts));
         
    }
})


module.exports = router;