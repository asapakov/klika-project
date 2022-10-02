const {Song} = require('../models/models')
const ApiError = require('../error/ApiError')

class SongController {
    async create(req, res, next) {
        try {
            let {name, singerId, yearId, genreId} = req.body
            const song = await Song.create({name, genreId, yearId, singerId})
            return res.json(song)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {yearId, genreId, singerId, limit, page} = req.query
        page = page || 1
        limit = limit || 5
        let offset = page * limit - limit
        let songs;
        if (!yearId && !genreId && !singerId) {
            songs = await Song.findAndCountAll({limit, offset})
        }
        if (yearId && !genreId && !singerId) {
            songs = await Song.findAndCountAll({where: {yearId}, limit, offset})
        }
        if (!yearId && genreId && !singerId) {
            songs = await Song.findAndCountAll({where: {genreId}, limit, offset})
        }
        if (!yearId && !genreId && singerId) {
            songs = await Song.findAndCountAll({where: {singerId}, limit, offset})
        }
        if (yearId && genreId && !singerId) {
            songs = await Song.findAndCountAll({where: {genreId, yearId}, limit, offset})
        }
        if (!yearId && genreId && singerId) {
            songs = await Song.findAndCountAll({where: {genreId, singerId}, limit, offset})
        }
        if (yearId && !genreId && singerId) {
            songs = await Song.findAndCountAll({where: {singerId, yearId}, limit, offset})
        }
        if (yearId && genreId && singerId) {
            songs = await Song.findAndCountAll({where: {singerId, genreId, yearId}, limit, offset})
        }
        return res.json(songs)
    }

    async getOne(req, res) {
        const {id} = req.params
        const song = await Song.findOne(
            {where: {id}}
        )
        return res.json(song)
    }

}

module.exports = new SongController();