const events = require('events');

let ev = new events.EventEmitter(); //Creaate Event

var c1 = (data) =>{
    console.log(`Events: ${data}`);
}
var c2 = (data) =>{
    console.log('This is the Event 2')
}

ev.on('my__event',c1)

// ev.once('eventOnce',() => {
//     console.log('This is the EventOnce ') //This code run only one time and not repeate
// })


 ev.off('my__event',c1);//unReginster
 ev.emit('my__event',"This is the My First Event");

ev.emit('eventOnce');
ev.emit('eventOnce');
ev.emit('eventOnce');
ev.emit('eventOnce');