// Callbacks 

const getMassage = (msg,callback)=>{
    setTimeout(()=>{
        console.log(msg);
        callback();
    },1000);
}

const showMassage = ()=>{
    console.log("This is the Callback Massage");
}
getMassage("This is the Massage",showMassage);
