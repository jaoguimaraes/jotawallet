import Joi from "joi"

export const CreateUser = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(3).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    createdAt: Joi.string(),
})