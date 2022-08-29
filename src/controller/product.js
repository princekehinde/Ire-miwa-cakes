const ProductManager = require('../modules/product-manager')
const {
    successResponse,
    errorResponse,
    paginationSuccessResponse,
} = require('../utils/response')

class ProductController {
    static async createProduct(req, res) {
        try {
            const result = await ProductManager.createProduct(req.body);

            if (result.status === 400) 
                return errorResponse(res, result.message, result.statusCode);
                 
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

    // static async get(req, res, next) {
    //     try{

    //     }catch(error){
    //         return errorResponse(res, 500, error.message)
    //     };
    // }
}

module.exports = ProductController