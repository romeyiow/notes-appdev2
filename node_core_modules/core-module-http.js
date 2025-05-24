const http = require('http');
const { emit } = require('process');

const EventEmitter = require('events');
const emitter = new EventEmitter();


// Create a simple HTTP server
const server = http.createServer((req, res) => {
    console.log('req:', req);
    console.log('res:', res);
    console.log('req.method:', req.method);
    console.log('req.url:', req.url);
    const data = {
        name: 'John Doe',
        age: 30,
        email: 'sample@email.com'
    }
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log('parsedBody:', parsedBody);
    });
    console.log('parsedBody:', parsedBody);
    console.log('body:', body);
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'application/json');
    // res.write('Hello, Node.js!');
    res.write(JSON.stringify(data));
    res.end('Hello, Node.js!');
    switch (req.method) {
        case 'GET':
            emitter.on('get', () => {
                console.log('GET request receivedzzzzzzzzzzzzzzzzzzzzzzzz');
            })

            emitter.emit('get');
            res.end('GET request received');
            break;
        case 'POST':
            res.end('POST request received');
            break;
        case 'PUT':
            res.end('PUT request received');
            break;
        case 'DELETE':
            res.end('DELETE request received');
            break;
        default:
            res.end('Request received');
    }

});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
    // console.log('server:', server);
});


//here's how to access the body of the request
