const path = require('path');

file = path.basename('text.txt'); //This return a fileName
console.log(path.join(__dirname,__filename)) // return Full Path/Derectory
console.log(path.parse('/text.txt')); // return a Path Object
console.log(path.resolve('text.txt')); //return Full path of parsed file
