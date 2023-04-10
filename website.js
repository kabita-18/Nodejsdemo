import pkg from 'body-parser';
const { json } = pkg;
import fs from 'fs'

import http from 'http';
const port = process.env.PORT|| 3000;
var data = [
    {name:"Kabita", age:"23", email:"kabita123@gmail.com"},
    {name:"Saloni", age:"20", email:"saloni123@gmail.com"}
]

const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html')
    

    if(req.url=='/'){
        res.statusCode=200;
        res.write(JSON.stringify(data));
        res.end('<h1> This is my first nodejs folder</h1> <p> hey this is the way to rock the world! </p>' )
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1> About my first nodejs website</h1>')
    }
    else if(req.url=='/form'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html')

        res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end('<h1> Page was not found on the server</h1>')
    }
    
    
})

server.listen(port, () =>{
    console.log(`server is listening on port ${port}`);
});