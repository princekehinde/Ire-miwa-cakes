const dotenv = require('dotenv');
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
    const cart = await CartModel.findOne({ userId, productId});
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

// /**
//  * @description - this method is used to increase the quantity of a cart
//  * @param {Object} data - the data to be created
//  * @return {Object} - the updated cart
//  */
//   static async increaseCartItemQuantity(data) {
//     const { userId, id } = data;
//     const cart = await CartModel.findOne(userId, id);
//     if (!cart)
//         return{
//             statusCode: 400,
//             message: 'Item not found in cart',
//         };

//         cart.quantity += 1;
//         cart.save();
//         return{
//             statusCode: 200,
//             message: "Item quatity as increase",
//         };
//      }

//    /**
//   *@description - this method is used to decrease the quantity of a cart
//  * @param {Object} data - the data to be created
//  * @return {Object} - the updated cart
//  */
//   static async decreaseCartItemQuantity(data) {
//     const { userId, id } = data;
//     const cart = await CartModel.findOne({userId, productId: id});
//     if (!cart)
//         return{
//             statusCode: 400,
//             message: 'Item not found in cart',
//         };

//         cart.quantity -= 1;
//         cart.save();
//         return{
//             statusCode: 200,
//             message: "Item quatity as decrease",
//         };
//      }

//     /**
//      * @description - this method is used to delete item
//      * @param {Object} data - The data to be created
//      * @returns {Object} - The updated cart
//      */
//     static async deleteCartItem(data) {
//       const { userId, id } = data;
//       const cart = await CartModel.findOneAndDelete({ userId, productId: id });
//       if (!cart)
//         // return {
//         //   statusCode: 400,
//         //   message: "Item not found in cart",
//         // };
//       // cart.delete();
//       return {
//         statusCode: 200,
//         message: "Item deleted from cart",
//       };
//     }

//  /**
//    * @description - This method is used to get all cart items
//    * @param {Object} query - The query to be used
//    * @returns {Object} - The response of the cart items
//    */
//     static async getCartItems(data) {
//     const { userId } = data;
//     const cart = await CartModel.paginate(
//       { userId },
//       {
//         populate: [
//           {
//             path: "productId",
//             model: "Product",
//           },
//           {
//             path: "userId",
//             model: "User",
//             select: "email",
//           },
//         ],
//       }
//     );
//     return {
//       statusCode: 200,
//       message: "Cart items retrieved successfully",
//       data: cart,
//     };
//   }
  }
module.exports = CartManager;
