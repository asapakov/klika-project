import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";
import MusicContext from "../context/MusicContext";

const Pages = observer(() => {
    const {song} = useContext(MusicContext)
    const pageCount = Math.ceil(song.totalCount / song.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={song.page === page}
                    onClick={() => song.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
