const OrderManager = require('../modules/order-manager')
const {
    successResponse,
    errorResponse,
    paginationSuccessResponse,
} = require('../utils/response')

class OrderController {
    static async processOrder(req, res) {
        try{
            req.body.userId = req.userId;
            const result = await OrderManager.processOrder(req.body);

            if (result.statusCode === 400)
                return errorResponse(res, result.statusCode, result.message);

                return successResponse(
                    res,
                    result.statusCode,
                    result.message,
                    result.data,
                )
        }catch(error){
            return errorResponse(res, 500, error.message)
        }
    }
}

module.exports = OrderController;