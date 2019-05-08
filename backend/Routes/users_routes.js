/* const router = require('express').Router()
const controllers = require('../Controllers/users_controller')



router.post('/register',controllers.register)
router.post('/login',controllers.login)

module.exports=router; */
const express = require('express');
const Authentication = require('../Controllers/new_user_controller');
const router = express.Router();

/* POST to Register or Login */
router.post('/register', Authentication.register);
router.post('/login', Authentication.login);

module.exports = router;