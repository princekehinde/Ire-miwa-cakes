const express = require("express");
const Validator = require('../validation/cart')
const Controller = require('../controller/cart')
const Middleware = require('../middleware/auth-middleware')

const router = express()

router.post( '/',
  Middleware.isUserAuthenticated,
  Validator.createCartForm,
  Controller.createCart,
)

// router.put( '/increase/:id',
// Middleware.isUserAuthenticated,
// Controller.increaseCartItemsQuantity
// );

// router.put(
//   '/decrease/:id',
//   Middleware.isUserAuthenticated,
//   Controller.decreaseCartItemsQuantity
// );

// router.delete(
//   '/:id',
//   Middleware.isUserAuthenticated,
//   Controller.deleteCartItem
// )
// router.get(
//   '/',
//   Middleware.isUserAuthenticated,
//   Controller.getCartItem
// )

module.exports = router
