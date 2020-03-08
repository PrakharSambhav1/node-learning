const http = require('http');

const senddata = [
    {id:1,message:"Hello"},
    {id:2,message:"Hello2"},
    {id:3,message:"Hello3"}
]; 
const server = http.createServer((req,res)=>{
    console.log("hello 2");
    res.setHeader('Content-type','application/json');
    res.write(JSON.stringify(senddata));
    res.end(JSON.stringify(senddata));
});
const PORT = 5000;
server.listen(PORT,()=>{
    console.log("Port part");
});