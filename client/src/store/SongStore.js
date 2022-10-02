import {makeAutoObservable} from "mobx";

export default class SongStore {
    constructor() {
        this._years = []
        this._genres = []
        this._singers = []
        this._songs = []
        this._selectedYear = {}
        this._selectedGenre = {}
        this._selectedSinger = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
        makeAutoObservable(this)
    }

    setYears(years) {
        this._years = years
    }

    setGenres(genres) {
        this._genres = genres
    }

    setSingers(singers) {
        this._singers = singers
    }

    setSongs(songs) {
        this._songs = songs
    }

    setSelectedYear(year) {
        this.setPage(1)
        this._selectedYear = year
    }

    setSelectedGenre(genre) {
        this.setPage(1)
        this._selectedGenre = genre
    }

    setSelectedSinger(singer) {
        this.setPage(1)
        this._selectedSinger = singer
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get years() {
        return this._years
    }

    get genres() {
        return this._genres
    }

    get singers() {
        return this._singers
    }

    get songs() {
        return this._songs
    }

    get selectedYear() {
        return this._selectedYear
    }

    get selectedGenre() {
        return this._selectedGenre
    }

    get selectedSinger() {
        return this._selectedSinger
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}
