const Router = require('express')
const singerController = require('../controlllers/singerController')
const router = new Router()

router.post('/', singerController.create )
router.get('/', singerController.getAll)
router.get('/:id', singerController.getOne)

module.exports = router