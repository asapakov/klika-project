const ApiError = require('../error/ApiError')
const {Singer} = require('../models/models')

class SongController {

    async create(req, res, next) {
        const {name} = req.body
        const singer = await Singer.create({name})
        return res.json(singer)
    }

    async getAll(req, res) {
        const singers = await Singer.findAll()
        return res.json(singers)
    }

    async getOne(req, res) {
        const {id} = req.params
        const singer = await Singer.findOne(
            {where: {id}}
        )
        return res.json(singer)
    }
}

module.exports = new SongController();