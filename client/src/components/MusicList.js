import React, {useContext} from "react";
import MusicContext from "../context/MusicContext";
import {Song} from "./Song";
import {observer} from "mobx-react-lite";

const MusicList = observer(() => {

    const {song} = useContext(MusicContext)


    return (
        <>
            {song.songs.length > 0 &&
                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th>Исполнитель</th>
                        <th>Наименование</th>
                        <th>Жанр</th>
                        <th>Год</th>
                    </tr>
                    </thead>
                    <tbody>
                    {song.songs.map(song =>
                        <Song key={song.id} song={song}/>
                    )}
                    </tbody>
                </table>
            }</>)
});

export default MusicList;