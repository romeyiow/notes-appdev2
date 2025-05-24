const eventsEmitter = require('events')
const emitter = new eventsEmitter();

emitter.on('start', () => {
    console.log("Application Started!");
});

emitter.on('data', (data) => {
    console.log(`Data received: 
        name: ${data.name}
        email:${data.email}`);
});

emitter.on('error', (err) => {
    console.error("Error occurred:", err);

});

emitter.emit('start', 8);
emitter.emit('data', { 'name': 'Lorenzo Martinez', 'email': 'zalorenmartinez@gmail.com' });

emitter.emit('error',"Requested file not found!");

