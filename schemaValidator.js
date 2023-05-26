const schemaValidator = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body)
    if(error) {
        res.send(error)
    }
    else {
        next()
    }
}
module.exports = schemaValidator
