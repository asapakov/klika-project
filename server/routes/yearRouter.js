const Router = require('express')
const yearController = require('../controlllers/yearController')

const router = new Router()

router.post('/', yearController.create)
router.get('/', yearController.getAll)
router.get('/:id', yearController.getOne)

module.exports = router