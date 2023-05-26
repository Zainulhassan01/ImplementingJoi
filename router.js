const express = require('express') 
const userSchema = require('./uservalidator')
const schemaValidator = require('./schemaValidator')
const createuser = require('./usercontroller')
const router = express.Router()

router.get('/hello', (req, res) => {
    res.send('Hello')
})

router.post(
    '/createuser',
    schemaValidator(userSchema),
    createuser 
)

module.exports = router
