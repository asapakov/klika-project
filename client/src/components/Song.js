import React, {useState, useEffect} from "react";
import {fetchOneGenre, fetchOneSinger, fetchOneYear} from "../http/SongApi";

export const Song = ({song}) => {

    const [year, setYear] = useState([]);
    const [singer, setSinger] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetchOneYear(song.yearId).then(data => setYear(data.data.name))
        fetchOneSinger(song.singerId).then(data => setSinger(data.data.name))
        fetchOneGenre(song.genreId).then(data => setGenre(data.data.name))
    }, [])

    return (
        <tr>
            <td>{singer}</td>
            <td>{song.name}</td>
            <td>{genre}</td>
            <td>{year}</td>
        </tr>
    )
}

