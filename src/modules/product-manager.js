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

        /**
         * @description - this method is used to get all products
         * @param {Object} query - the query to be used
         * @param {Object} - the response of the products
         */
        static async getProducts(data) {
          const {page, limit } = data;

          const pageQuery = {
            page: page ? parseInt(page) : 1,
            limit: limit ? parseInt(limit) :10,
          };
          const products = await ProductModel.paginate({}, pageQuery);

          return {
            statusCode: 200,
            message: 'Product retrieved successfully',
            data: products,
          };
      };

      /**
       * @description -  this method is used get a particular product
       * @param { Object } query - the query 
       * @param { Object } - the response of
       */
      static async getProductById(data){
        const { id } = data;

        const products = await ProductModel.findById(id);

        if(!products)
          return{
            statusCode: 404,
            message: 'Product not found',
          }
        return {
          statusCode: 200,
          message: 'Product Found successfully',
          data: products
        }

      }
}

module.exports = ProductManager;