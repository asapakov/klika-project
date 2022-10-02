import React, {useContext} from 'react';
import {Card} from "react-bootstrap";
import MusicContext from "../context/MusicContext";
import {observer} from "mobx-react-lite";

const BrandBar = observer(({cancel}) => {

    const {song} = useContext(MusicContext)

    return (
        <div className="d-flex">
            {song.years.length > 0 ?
                song.years.map(year =>
                    <Card
                        style={{cursor: 'pointer'}}
                        key={year.id}
                        className="p-3 year-card"
                        onClick={() => song.setSelectedYear(year)}
                        border={year.id === song.selectedYear.id && !cancel ? 'danger' : 'light'}
                    >
                        {year.name}
                    </Card>
                )
                :
                <h4 style={{opacity: 0.54}}>Нет данных о годах</h4>
            }
        </div>
    );
});

export default BrandBar;
