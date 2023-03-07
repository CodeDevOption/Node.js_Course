const fs = require('fs');
const data = {
    Name:"lahiru",
    Age:20,
    status:'single'
}
fs.writeFileSync('data.json',JSON.stringify(data));
let text = "Name:'lahiru',Age:12,status:'single'";

fs.writeFile('Text.txt',';'+text,{flag:'a+'},(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('write success');
})



// This is the File Delete Methode

fs.unlink('Text1.txt',(err)=>{
    if (err) throw err;
    console.log("File Deleted Successfuly");
})