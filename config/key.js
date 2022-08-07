 require("dotenv").config();
 
module.exports = {
MongoDB: process.env.MONGO_URL,
TEST_DB: process.env.TEST_URL,
};