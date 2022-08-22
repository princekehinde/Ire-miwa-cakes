const express = require('express');
const userValidator = require('../validation/user');
const userController = require('../controller/user');
const router = express.Router();

router.post('/register', 
userValidator.register,
userController.register
 );

module.exports = router;