const Router = require('express')
const router = new Router()

const genreRouter = require('./genreRouter')
const yearRouter = require('./yearRouter')
const singerRouter = require('./singerRouter')
const songRouter = require('./songRouter')

router.use('/genre', genreRouter)
router.use('/singer', singerRouter)
router.use('/song', songRouter)
router.use('/year', yearRouter)

module.exports = router