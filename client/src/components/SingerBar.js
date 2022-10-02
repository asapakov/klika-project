import React, {useContext} from "react";
import {Container, ListGroup} from "react-bootstrap";
import MusicContext from "../context/MusicContext";
import {observer} from "mobx-react-lite";

const SingerBar = observer(({cancel}) => {

    const {song} = useContext(MusicContext)
    return (
        <Container className="mt-3" >
            {song.singers.length > 0 ?
                <ListGroup>
                    <h5>По исполнителю</h5>
                    {song.singers.map(singer =>
                        <ListGroup.Item
                            className="list-group"
                            style={{cursor: 'pointer'}}
                            active={!cancel && singer.id === song.selectedSinger.id}
                            onClick={() => song.setSelectedSinger(singer)}
                            key={singer.id}
                        >
                            {singer.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
                :
                <h6 style={{opacity: 0.54}}>Нет данных об исполнителях</h6>
            }
        </Container>
    )
});

export default SingerBar;

