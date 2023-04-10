import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(()=>{
    console.log("Reminder! an event will occured")
  },3000)
});
myEmitter.emit('event');
console.log("running event");