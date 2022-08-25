const express = require('express');
const userValidator = require('../validation/user');
const userController = require('../controller/user');
const router = express.Router();

router.post('/register', 
userValidator.registerAndLoginForm,
userController.register
 );

router.post('/login',
  userValidator.registerAndLoginForm,
  userController.login

  )

module.exports = router;