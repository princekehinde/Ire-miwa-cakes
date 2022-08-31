const Joi = require('joi');
const { errorResponse } = require('../utils/response')

class ProductValidation {
    static async createProductForm(req, res, next) {
        try{
            const createProductFormSchema = Joi.object({
                name: Joi.string().required(),
                description: Joi.string().required(),
                price: Joi.number().required(),
                quantity: Joi.number().required(),
                image: Joi.string().required(),
            })
            await createProductFormSchema.validateAsync(req.body, {
                abortEarly: false,
            })
            next();
        }catch (error) {
            return errorResponse(res, 400, error.message);
        }
    }

    static async getProductById(req, res, next){
        try {
            const getProductByIdSchema = Joi.object({
                id: Joi.string().required(),
                })

            await getProductByIdSchema.validateAsync(req.body,{
                abortEarly: false,
            })
            next();    
        }catch(error) {
            return errorResponse(res, 400, error.message);

        }
    }
}

module.exports = ProductValidation;