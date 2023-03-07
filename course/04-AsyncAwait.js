//Async and Await 

const Clown = async  ()=>{
    return new Promise(resolve =>{
        setTimeout(()=>resolve('hellow'),2000);
    })
}

const getData = async (callback)=>{
    const msg = await Clown();
    console.log(msg);
    callback();
}


const After = ()=>{
    console.log('after');
}
getData(After)