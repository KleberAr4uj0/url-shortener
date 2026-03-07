import joi from "joi";

export const urlSchema = joi.object({
    url: joi.string().uri({ scheme: ['http', 'https'] }).required()
})