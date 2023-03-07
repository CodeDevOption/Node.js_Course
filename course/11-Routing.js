const http = require('http');

 function index(request,response){
        response.writeHead(200)
        response.end('Node Rowting')
 }
 function about(request,response){
        response.write('This is the About page');
        response.end();
 }


// http.createServer((req,res)=>{
    
//     if(req.url == '/'){
//         return index(req,res);
//     }
//     if(req.url == '/about'){
//         return about(req,res);
//     }
// }).listen(3000,'localhost',()=>{
//     console.log('Server is running http://localhost:3000');
// })






//  Easy Way to use Rowters


const routes = {
    '/':(req,res)=>{
        res.writeHead(200)
        res.end('Node Rowting')
    },
    '/about':(req,res)=>{
        res.write('This is the About page');
        res.end();
    },
    '/contact':(req,res)=>{
        res.write('Thi is the MY PhoneNo -> +94705130200');
        res.end();
    }
}

http.createServer((req,res)=>{
    if(req.url in routes){
        return routes[req.url](req,res);
    }


}).listen(3000,'localhost',()=>{
    console.log('Server is running http://localhost:3000');
})


