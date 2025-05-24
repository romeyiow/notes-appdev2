const EventEmitter = require('events');
const emitter = new EventEmitter();

// Create a listener
emitter.on('event', () => {
  console.log('Event triggered!');
});

// Trigger the event
emitter.emit('event');

// Another listener
emitter.on('event', () => {
  console.log('Another listener triggered!');
});

// Trigger the event again 
emitter.emit('event');


// Another example with specific arguments
emitter.on('eventWithArgs', (arg1, arg2) => {
  console.log('Event with arguments:', arg1, arg2);
});

// Another example with specific arguments
emitter.on('eventWithArgs', (data) => {
  console.log('Event with arguments:', data, data.arg2);
});

// Trigger the event with arguments
emitter.emit('eventWithArgs', 'argument1', 'argument2');

// Remove a listener
emitter.removeAllListeners('event');
emitter.emit('event');

// Remove all listeners
emitter.removeAllListeners();
emitter.emit('eventWithArgs', 'argument1', 'argument2');
// Output:
// Event triggered!
// Another listener triggered!
// Event with arguments: argument1 argument2

// Another example with different event names (click, hover, etc.)
emitter.on('click', () => {
  console.log('Click event triggered!');
});

emitter.on('hover', () => {
  console.log('Hover event triggered!');
});

emitter.emit('click');
emitter.emit('hover');
