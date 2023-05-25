const express = require('express') 
const app = express()
require('dotenv').config();
const apiRoutes = require('./routes')
const list = require('express-list-endpoints')
const bodyParser = require('body-parser')
let eventEmitter = require('./utils/eventEmitter')

app.use(bodyParser.json({urlExtended: true}))

const users = [
    {
        firstName: 'Tim',
        lastName: 'Cook',
        admin: true,
    }, 
    {
        firstName: 'dim',
        lastName: 'dim',
        admin: false,
    },
    {
        firstName: 'dim',
        lastName: 'dim',
        admin: false,
    }
]

app.get('/', (req, res) => {
    res.render('index', {users: users.length > 0 ? users : []})
})

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log('Listennings');
    eventEmitter = eventEmitter.init()
    eventEmitter.on('error', (res, reqBody) => {
        console.log('error');
        reqBody.isError = true;
        res.status(400).send({reqBody})
    });
})
