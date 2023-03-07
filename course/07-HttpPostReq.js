const https = require('https');

const data = JSON.stringify( {
    name:"Lahiru Sadaruwan",
    job:"Web Development",
})

const options ={
    hostname:'reqres.in',
    path:'/api/users',
    method:'POST',
    header:{
        'Content-Type':'Aplication/json'
    }
}

const req = https.request(options,(res)=>{
    let body = '';
    console.log(res.statusCode);
    res.on('data',chunk=>{
        body += chunk;
    })
    res.on('end',()=>{
        console.log("Body",JSON.parse(body));
    })
})

req.write(data);
req.end();