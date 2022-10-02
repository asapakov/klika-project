const Router = require('express')
const songController = require('../controlllers/songController')

const router = new Router()

router.post('/', songController.create)
router.get('/', songController.getAll)
router.get('/:id', songController.getOne)

module.exports = router