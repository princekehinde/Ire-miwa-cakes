const Joi = require('joi');
const { successResponse, errorResponse } = require('../utils/response');

class userValidator{
    static async register(req, res, next){
        try{
            const registerSchema = Joi.object().keys({
                username: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().min(6).required(),
            });

            await registerSchema.validateAsync(req.body, {
                 abortEarly: false,
                });
                next();
        } catch (error) {
            return errorResponse(res, 400, error.message);
        }
    }


}

module.exports = userValidator;