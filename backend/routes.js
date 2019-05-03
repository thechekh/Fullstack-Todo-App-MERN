const router = require('express').Router()
const controllers = require('./controllers.js')

router.get('/',controllers.getAll)
router.post('/',controllers.create)
router.post('/:id',controllers.delete)
router.post('/:todoid/complete',controllers.complete);

module.exports=router;


