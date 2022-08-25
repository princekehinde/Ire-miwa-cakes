const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const UserModel = require('../model/user');

class UserManager {
    constructor() {}

    static userResponse = (data) => {
      return {
        email: data.email,
        username: data.username,
        id: data.id,
      };
    };
  
    /**
     * @param {string} username the username of the user
     * @param {string} email the email of the user
     * @param {string} password the password of the user
     */

     static async register(data) {
        try {
          const { email, username, password } = data;
    
          const user = await UserModel.findOne({
            $or: [
              { email: email.toLowerCase() },
              { username: username.toLowerCase() },
            ],
          });
    
          if (user)
            return {
              statusCode: 400,
              message: "User already exists",
            };
    
          const hashPassword = await bcrypt.hashSync(password, 10);
    
          const createUser = await UserModel.create({
            email: email.toLowerCase(),
            username: username.toLowerCase(),
            password: hashPassword,
          });
    
          return {
            statusCode: 200,
            message: "User created successfully",
            data: await UserManager.userResponse(createUser),
          };
        } catch (error) {
          throw new Error(error);
        }
      }
    
      /**
       * @description - this method is used to login a user
       * @param {object} data - the data of the user
       * @param {object} - the response of the user
       */
      static async login(data) {
          const { email, password } = data;
          const User = await UserModel.findOne({ email: email.toLowerCase() });
          if (!User)
          return {
              statusCode: 400,
              message: "User not found",
            };

            const isPasswordValid = await bcrypt.hashSync(password, User.password);
            if (!isPasswordValid)
            return {  
              statusCode: 401,
                message: "Invalid password", 
              };

              // const token = await jwt.generateToken(User);
            return {
              statusCode: 200,
              message: "Login successful",
              // data: {
              //   token,
              //   User: await UserManager.userResponse(User),
              //   },
               }
              };
              }

module.exports = UserManager