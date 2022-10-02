import React, {useContext} from "react";
import {Container, ListGroup} from "react-bootstrap";
import MusicContext from "../context/MusicContext";
import {observer} from "mobx-react-lite";

const GenreBar = observer(() => {

    const {song} = useContext(MusicContext)
    return (
        <Container>
            {song.genres.length > 0 ?
                <ListGroup>
                    <h5>По жанрам</h5>
                    {song.genres.map(genre =>
                        <ListGroup.Item
                            className="list-group"
                            style={{cursor: 'pointer'}}
                            active={genre.id === song.selectedGenre.id}
                            onClick={() => song.setSelectedGenre(genre)}
                            key={genre.id}
                        >
                            {genre.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
                :
                <h4 style={{opacity: 0.54}}>Нет данных о жанрах</h4>
            }
        </Container>
    )
});

export default GenreBar;

