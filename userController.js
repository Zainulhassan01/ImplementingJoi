let eventEmitter = require('./eventEmitter')

const createuser = (req, res) =>{
    eventEmitter = eventEmitter.getInstance()
    return eventEmitter.emit('error', res, req.body)
    res.send("Request completed successfully")
}

module.exports = createuser
