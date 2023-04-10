import pkg from 'body-parser';
const { json } = pkg;

import http from 'http';
const port = process.env.PORT|| 3000;
var data = [
    {name:"Kabita", age:"23", email:"kabita123@gmail.com"},
    {name:"Saloni", age:"20", email:"saloni123@gmail.com"}
]

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html')
    res.write(JSON.stringify(data));
    res.end('<h1> This is my first nodejs folder</h1> <p> hey this is the way to rock the world! </p>' )
})

server.listen(port, () =>{
    console.log(`server is listening on port ${port}`);
});