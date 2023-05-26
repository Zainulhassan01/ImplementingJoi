const express = require('express') 
const app = express()
require('dotenv').config();
const apiRoutes = require('./routes')
const list = require('express-list-endpoints')
const bodyParser = require('body-parser')

app.use(bodyParser.json({urlExtended: true}))

app.use(
    '/api',
     apiRoutes
     )
console.log(list(app));

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log('Listennings');
})
