const Joi = require('joi');
const { successResponse, errorResponse } = require('../utils/response');

class userValidator{
        static async registerAndLoginForm(req, res, next) {
            try {
              const registerAndLoginFormSchema = Joi.object().keys({
                email: Joi.string().email().required(),
                username: Joi.string(),
                password: Joi.string().min(8).required(),
              });
        
              await registerAndLoginFormSchema.validateAsync(req.body, {
                abortEarly: false,
              });
              next();
            } catch (error) {
              return errorResponse(res, 400, error.message);
            }
          }

          static async changePasswordForm(req, res, next) {
            try {
      const changePasswordFormSchema = Joi.object().keys({
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().min(8).required(),
      });

      await changePasswordFormSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      return errorResponse(res, 400, error.message);
    }
  }
}

module.exports = userValidator;