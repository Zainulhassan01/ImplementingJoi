const Joi = require('joi')
const roles = ["SE", "EE"];

const userSchema = Joi.object({
    username: Joi.string()
        .required(),

    role: Joi.string()
        .valid(...roles)
        .required(),
})

module.exports = userSchema
