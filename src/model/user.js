const mongoose = require('mongoose');
 const UserShema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            },
        resetPasswordToken: {
            type: String,
        },
        no_tries: {
            type: Number,
            default: 0,
        },
},
  { timestamps: true }
);
module.exports = mongoose.model('User', UserShema);
