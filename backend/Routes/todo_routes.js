const router = require('express').Router()
const controllers = require('../Controllers/todo_controller')

router.get('/',controllers.getAll)
router.post('/',controllers.create)
router.post('/:id',controllers.delete)
router.post('/:id/complete',controllers.complete);

module.exports=router;


