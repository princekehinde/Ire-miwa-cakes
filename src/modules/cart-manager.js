const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const { populate } = require('../model/cart');
const CartModel = require('../model/cart');
dotenv.config()

class CartManager {
    /**
     * @description - this method is used to create a new cart
     * @param { object } data - the data to be created
     * @param { object } - the created object
     */

    static async createCart(data) {
      const { userId, productId, quantity } = data;
    const cart = await CartModel.findOne({ userId, productId });
    if (cart)
      return {
        statusCode: 400,
        message: "Item already added to cart",
      };
    const createCart = await CartModel.create({
      userId,
      productId,
      quantity,
    });
    return {
      statusCode: 201,
      message: "Item added to cart",
      data: createCart,
    };
  }

/**
 * @description - this method is used to increase the quantity of a cart
 * @param {Object} data - the data to be created
 * @return {Object} - the updated cart
 */
  static async increaseCartItemQuantity(data) {
    const { userId, id } = data;
    const cart = await CartModel.findOne(userId, id);
    if (!cart)
        return{
            statusCode: 400,
            message: 'Item not found in cart',
        };

        cart.quantity += 1;
        cart.save();
        return{
            statusCode: 200,
            message: "Item quatity as increase",
        };
}
  }
module.exports = CartManager;
