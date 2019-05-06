const router = require('express').Router()
const controllers = require('../Controllers/users_controller')


console.log("us contr",controllers);
router.post('/register',controllers.register)

module.exports=router;