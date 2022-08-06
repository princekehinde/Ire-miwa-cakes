const mongoose = require('mongoose');
const { MongoDB } = require('./key');

const db = async () => {
    if (process.env.MongoDB === 'development') {
        MONGO_URL = 'mongodb://localhost:27017/Ire_Miwa_db';
    } else{
        MONGO_URL = MongoDB|| 'mongodb://localhost:27017/Ire_Miwa_db'
    } return(
        mongoose.connect(MONGO_URL),
         {
             useNewUrlParser: true,
             useUnifiedTopology: true
            })
        }
        module.exports = db