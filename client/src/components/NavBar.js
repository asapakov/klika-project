import React, {useContext, useState, useEffect} from "react";
import {Button, Container, Modal, Navbar, Dropdown, Form} from "react-bootstrap";
import MusicContext from "../context/MusicContext";
import {createSong, fetchGenres, fetchSingers, fetchYears} from "../http/SongApi";
import {observer} from "mobx-react-lite";

export const NavBar = observer(() => {

    const {song} = useContext(MusicContext)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('')

    useEffect(() => {
        fetchGenres().then(data => song.setGenres(data))
        fetchYears().then(data => song.setYears(data))
        fetchSingers().then(data => song.setSingers(data))
    }, [])

    const addSong = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('yearId', song.selectedYear.id)
        formData.append('genreId', song.selectedGenre.id)
        formData.append('singerId', song.selectedSinger.id)
        createSong({
            name: name,
            yearId: song.selectedYear.id,
            genreId: song.selectedGenre.id,
            singerId: song.selectedSinger.id
        }).then(data => handleClose())
    }

    return (
        <Navbar style={{backgroundColor: "lightgrey"}}>
            <Container>
                <Navbar.Brand href="#home">Music Store</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="primary" onClick={handleShow}>
                        Добавить песню
                    </Button>
                </Navbar.Collapse>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить песню в список</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="mb-3">
                            <label>Наименование</label>
                            <input className="form-control" value={name} onChange={e => setName(e.target.value)}
                                   type="text"
                                   placeholder="Наименование песни"/>
                        </div>

                        <div className="mb-3">
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>{song.selectedGenre.name || "Выберите жанр"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {song.genres.map(genre =>
                                        <Dropdown.Item
                                            onClick={() => song.setSelectedGenre(genre)}
                                            key={genre.id}
                                        >
                                            {genre.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="mb-3">
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>{song.selectedSinger.name || "Выберите исполнителя"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {song.singers.map(singer =>
                                        <Dropdown.Item
                                            onClick={() => song.setSelectedSinger(singer)}
                                            key={singer.id}
                                        >
                                            {singer.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="mb-3">
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>{song.selectedYear.name || "Выберите год"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {song.years.map(year =>
                                        <Dropdown.Item
                                            onClick={() => song.setSelectedYear(year)}
                                            key={year.id}
                                        >
                                            {year.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                    <Button variant="success" onClick={addSong}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    )
})

