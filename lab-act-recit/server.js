const http = require('http'); 

const server = http.createServer((req, res) => {
    //4
    if (req.url === '/greet') { 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello, Node.js!');
        res.end();
    }
    else{ //5
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Page Not Found!');
        res.end();
    }


});

const port = 3000;
const hostname = 'localhost';

server.listen(port, hostname, () => {
    console.log('Server running at http://localhost:3000/');
});

