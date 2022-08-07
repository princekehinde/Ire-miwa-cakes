const mongoose = require('mongoose');
require('dotenv').config();
const { MongoDB, TEST_DB } = require('./key');


let MONGO_URL = null

const db = async () => {
    if (process.env.Node_ENV === 'development') {
        // MONGO_URL = MongoDB || 'mongodb://localhost:27017/Ire_Miwa_db';
        MONGO_URL ='mongodb://localhost:27017/Ire_Miwa_db'

    } else{
        console.log(MONGO_URL)
       MONGO_URL = `$TEST_DB`
    } 
    return mongoose.connect( MONGO_URL,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
     }

        module.exports = db