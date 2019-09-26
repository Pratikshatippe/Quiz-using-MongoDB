const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write("hello word");
        console.log("hello");
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.listen(3000);