const Joi = require('joi');
const { errorResponse} = require('../utils/response');

class CartValidator{
    static async CreateCartForm(req, res, next) {
        try{
            const createCartSchema = Joi.object({
                productId: Joi.string().required(),
                quantity: Joi.number().default(1),
                userId: Joi.string().required()
            })
            await createCartSchema.validateAsync(req.body,{
                abortEarly: false,
            })
            next()
        }catch(error){
            return errorResponse(res, 400, error.message);

        }
    }
}
module.exports = CartValidator;