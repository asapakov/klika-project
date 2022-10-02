const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Song = sequelize.define('song', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Singer = sequelize.define('singer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Year = sequelize.define('year', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const GenreYear = sequelize.define('genre_year', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const SingerGenre = sequelize.define('singer_genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const YearSinger = sequelize.define('year_singer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Singer.hasMany(Song)
Song.belongsTo(Singer)

Genre.hasMany(Song)
Song.belongsTo(Genre)

Year.hasMany(Song)
Song.belongsTo(Year)


module.exports = {
    Singer, Song, Genre, Year, GenreYear
}
