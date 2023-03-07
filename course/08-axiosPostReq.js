const axios = require("axios")

const data = JSON.stringify({
    name:"lahiru",
    Job:"Arcitecture",
})

axios.post('https://reqres.in/api/users',data).then((res)=>{
    console.log(res.status);
    console.log(res.data);
}).catch((error)=>{
    console.log(error);
})