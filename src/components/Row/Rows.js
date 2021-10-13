import React, {useState, useEffect} from 'react';
import './Row.css';
import axios from '../../utils/axios';
import requests from '../../utils/Requests';
import Row from './Row';

export default function Rows() {

    useEffect(() => {

    }, []);

    return (
        <div className='rowsStart'>
            <Row type='getNetflixOriginals' title='Netflix Originals' />
            <Row type='getTrending' title='Trending Now' />
            <Row type='getTopRated' title='Top Rated' />
        </div>
    )
}
