// Promises

const promises = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve("Before"),1000); // wait 1s and after return value
})

promises.then(
    result =>{
        console.log(result); // get value 
        After();
    },error =>{
        console.log(error);
    }
);


const After = ()=>{
    console.log('After');
}




