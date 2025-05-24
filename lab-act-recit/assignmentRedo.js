//import modules
const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const events = require('events')
const url = require('url')


//events log
const emitter = new events()
emitter.on('log', (action, filename) => {
    console.log(`${filename} has been ${action}}`)
})

//create server
const server = http.createServer((req, res) => {
    
    //process req
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname
    const query = parsedUrl.query
    const filename = path.join(__dirname,query.filename || "")

    //routing
    switch (path){
        case '/' :
            break
        case '/create' :
            break
        case '/update' :

        emitter.emit('log','updated',filename)
            break
        case '/read' :
            break
        case '/delete' :
            break
        default:
            break
    }


});

//run server
server.listen(3000,'localhost',()=>{
   
})