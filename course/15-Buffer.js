//const buf = Buffer.from('Lahiru Sadaruwan');
// console.log(buf.toString());

// for(let i=0; i< buf.length; i++){
//     console.log(buf[i]);
// }

// buf.map((data)=>{
//     console.log(data);
// })


const buf = Buffer.alloc(10);
buf.write('Lahiru sadaruwan');


buf.map((data)=>{
    console.log(data);
})