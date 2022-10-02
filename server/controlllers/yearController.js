const {Year, Singer} = require('../models/models')
const ApiError = require('../error/ApiError')

class YearController {

    async create(req, res) {
        let {name} = req.body
        const year = await Year.create({name})
        return res.json(year)
    }

    async getAll(req, res) {
        const years = await Year.findAll()
        return res.json(years)
    }

    async getOne(req, res) {
        const {id} = req.params
        const year = await Year.findOne({
                where: {id},
            }
        )
        return res.json(year)
    }
}

module.exports = new YearController();