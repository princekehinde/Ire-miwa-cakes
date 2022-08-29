const { parse } = require('dotenv')
const ProductModel = require('./../model/product');

class ProductManager {

    /**
     * @description - this method is used to create a new cake product
     * @param {object} data - the data to be created
     * @return {object} - the created cake product
     */

    static async createProduct(data) {
        const { name, description, price, quantity, image } = data;

        const product = await ProductModel.findOne({ name });

        if (product)
          return{
            statusCode: 400,
            message: 'Product already exists',
          }
          const createProduct = await ProductModel.create({
            name,
            price,
            quantity,
            description,
            image,
          })
           
          return {
            statusCode: 201,
            message: 'Product created successfully',
            data: createProduct,
          };
        }
}

module.exports = ProductManager;