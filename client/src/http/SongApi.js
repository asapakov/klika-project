import $host from './index'

export const fetchYears = async () => {
    const {data} = await $host.get('/api/year')
    return data
}

export const fetchOneYear = async (id) => {
    const {data} = await $host.get('/api/year/' + id)
    return {data}
}

export const fetchGenres = async () => {
    const {data} = await $host.get('/api/genre')
    return data
}

export const fetchOneGenre = async (id) => {
    const {data} = await $host.get('/api/genre/' + id)
    return {data}
}

export const fetchSingers = async () => {
    const {data} = await $host.get('/api/singer')
    return data
}

export const fetchOneSinger = async (id) => {
    const {data} = await $host.get('/api/singer/' + id)
    return {data}
}

export const createSong = async (song) => {
    const {data} = await $host.post('/api/song', song)
    return data
}

export const fetchSongs = async (yearId, genreId, singerId, page, limit = 5) => {
    const {data} = await $host.get('/api/song', {params: {
            yearId, genreId, singerId, page, limit
        }
    })
    return data
}

