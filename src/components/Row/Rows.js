import React, {useState, useEffect} from 'react';
import './Row.css';
import axios from '../../utils/axios';
import requests from '../../utils/Requests';
import Row from './Row';

export default function Rows({clickedFilmParent, data}) {

    const clickedFilm = (e) => {
        clickedFilmParent(e);
    }

    return (
        <div className='rowsStart'>
            {data.map((film, index) => {
                return <Row key={index} type={film.type} title={film.title} clickedFilm={clickedFilm} />
            })}
        </div>
    )
}
