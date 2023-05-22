const EventEmitter = require('events');
let eventEmitter;

module.exports = {
    init: () => {
        if(!eventEmitter) { eventEmitter = new EventEmitter() }
        return eventEmitter
    },
    getInstance: () => {
        if(!eventEmitter) { throw new Error }
        return eventEmitter
    }
}
