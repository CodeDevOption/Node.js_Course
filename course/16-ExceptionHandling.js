// try{
// // Exicute Code

// console.log('this is the Block code')
// lsdjflsjf;ls;
// }catch(e){
//     console.log('this is the Error Code');
//     console.log(e)
// }

const doSomthing = async ()=>{
    console.log('Do Something One');
    
}
const dosomthing2 = async ()=>{
    console.log('Do Something Two');
}
const Dosomting3 = async ()=>{
    console.log('Do Something Three');
   

}


// doSomthing().then(dosomthing2).then(Dosomting3).catch(e => console.log('Thi is the Error'))


// doSomthing().then(() => {
//     return dosomthing2().catch((e) => {
//         throw e;
//     })
// }).then( () =>{ 
//      return Dosomting3().catch((e) => {
//     throw e;
// })}).catch((e)=> console.log('error'))


const myErrorFunc = async () =>{
    try{
        await  doSomthing()
    }catch(err){
        console.log('error')
    }
}

myErrorFunc();