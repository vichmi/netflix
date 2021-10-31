import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import requests from '../../utils/Requests';
import axios from '../../utils/axios';
import Row from '../../components/Row/Row';

export default function Search() {
    let location = useLocation();
    const [films, setFilms] = useState([]);
    const [searchValue, setSearchValue] = useState(location.search.split('=')[1]);

    useEffect(() => {
        setSearchValue(location.search.split('=')[1]);
        (async() => {
            const res = await axios.get(requests.getSearched+searchValue);
            setTimeout(() => setFilms(res.data.results), 1000);
            console.log(films);
        })();

    }, [location]);

    return (
        <div style={{marginTop: 50}}>
            <h1>Searched for: {searchValue}</h1>

            <Row films={films} />
        </div>
    )
}
