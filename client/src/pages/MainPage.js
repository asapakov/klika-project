import MusicList from "../components/MusicList";
import GenreBar from "../components/GenreBar";
import {Col, Row} from "react-bootstrap";
import YearBar from "../components/YearBar";
import {useContext, useEffect} from "react";
import MusicContext from "../context/MusicContext";
import {fetchGenres, fetchSingers, fetchSongs, fetchYears} from "../http/SongApi";
import {observer} from "mobx-react-lite";
import Pages from "../components/Pages";
import SingerBar from "../components/SingerBar";

const MainPage = observer(() => {
    const {song} = useContext(MusicContext)

    const cancelFilter = () => {
        fetchSongs(null, null, null, 1, 5).then(data => {
            song.setSongs(data.rows)
            song.setTotalCount(data.count)
        })
        song.setSelectedGenre(0)
        song.setSelectedSinger(0)
        song.setSelectedYear(0)
    }

    useEffect(() => {
        fetchYears().then(data => song.setYears(data))
        fetchGenres().then(data => song.setGenres(data))
        fetchSingers().then(data => song.setSingers(data))
        fetchSongs(null, null, null, 1, 5).then(data => {
            song.setSongs(data.rows)
            song.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchSongs(song.selectedYear.id, song.selectedGenre.id, song.selectedSinger.id, song.page, 5).then(data => {
            song.setSongs(data.rows)
            song.setTotalCount(data.count)
        })
    }, [song.page, song.selectedGenre, song.selectedYear, song.selectedSinger])

    return (
        <div>
            <Row style={{display: 'flex'}}>
                <Col md={3}>
                    <GenreBar/>
                    <SingerBar/>
                </Col>
                <Col md={9}>
                    <YearBar/>
                    <MusicList/>
                    <Pages/>
                    <button onClick={() => cancelFilter()} className="btn btn-danger">Очистить фильтр</button>
                </Col>
            </Row>
        </div>
    );
})

export default MainPage;
