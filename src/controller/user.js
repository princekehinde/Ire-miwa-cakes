const UserManager = require('../modules/user-manager');
const {
    successResponse,
    errorResponse,
    loginSuccessResponse,
    paginationSuccessResponse,
} = require('../utils/response');

class UserController {
    static async register(req, res) {
        try {
           const result = await UserManager.register(req.body);

           if (result.statusCode  === 400) {
               return errorResponse(res, 400, result.message);
           }

               return successResponse(
                res,
                result.statusCode,
                result.message,
                result.data
                )
           } catch (error) {
            return errorResponse(res, 500, 'Oops! Something went wrong');
        }
    }

    static async login(req, res) {
        try {
            const result = await UserManager.login(req.body);

            if (result.statusCode === 400 || result.statusCode === 404) {
                return errorResponse(res, result.statusCode, result.message);
            }

                return successResponse(
                    res, 
                    result.statusCode,
                    result.message,
                    result.data
                );
       } catch (error) {
    return errorResponse(res, 500, error.message)
    }
    }
}

module.exports = UserController;