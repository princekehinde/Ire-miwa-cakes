const express = require('express');
const userValidator = require('../validation/user');
const userController = require('../controller/user');
const Middleware = require('../middleware/auth-middleware')
const router = express.Router();

router.post('/register', 
userValidator.registerAndLoginForm,
userController.register
 );

router.post('/login',
  userValidator.registerAndLoginForm,
  userController.login
  )

router.put(
  "/change-password",
  Middleware.isUserAuthenticated,
  userValidator.changePasswordForm,
  userController.changePassword
)
module.exports = router;