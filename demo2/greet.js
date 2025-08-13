const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', () => {
  console.log('Hello! Welcome!');
});

emitter.on('login', (username) => {
  console.log(`${username} has logged in`);
});

emitter.emit('greet');
emitter.emit('login', 'John');
