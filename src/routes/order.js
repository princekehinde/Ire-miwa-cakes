const express = require('express');
const Validator = require('../validation/order')
const Controller = require('../controller/order')
const Middleware = require('../middleware/auth-middleware')

const router = express()

router.post(
    "/",
    Middleware.isUserAuthenticated,
    Controller.processOrder,
)
 router.get(
    '/',
    Middleware.isUserAuthenticated,
    Controller.getAllOrders
)
router.get(
    '/:id',
    Validator.validateOrderId,
    Controller.getOrderById
)

module.exports = router;