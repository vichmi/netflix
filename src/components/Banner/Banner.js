import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from '../../utils/axios';
import requests from '../../utils/Requests';
import { IconContext } from 'react-icons';
import {FaInfoCircle, FaPlay} from 'react-icons/fa';

export default function Banner({clickedFilmParent}) {
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const res = await axios.get(requests.getTrending);
            setFilm(res.data.results[Math.floor(Math.random()*res.data.results.length)]);
            setLoading(false);
        })();
    }, []);
    return !loading ? (
        <div className='container' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${film.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}>
            <div className='containerInfo'>
                <h1>{film.title || film.name}</h1>
                
                <div className='buttons'>
                    <div className='button' style={{backgroundColor: 'white'}}>
                        <IconContext.Provider style={{paddingLeft: '2rem'}} value={{ color: "black", size: '1.3em' }}>
                            <FaPlay />
                        </IconContext.Provider>
                        <div style={{width: '1em'}}></div>
                        <span>Play</span>
                    </div>

                    <div className='button' style={{backgroundColor: '#525252'}} onClick={() => {
                                clickedFilmParent(film);
                            }} >
                        <IconContext.Provider style={{paddingRight:' 2.4rem'}} value={{ color: "white", size: '1.3em' }}>
                            <FaInfoCircle/>
                        </IconContext.Provider>
                        <div style={{width: '1em'}}></div>
                        <span style={{color: 'white'}}>More Info</span>
                    </div>
                </div>
                

            </div>
            
            <div className='fade'></div>
            
        </div>
    ) : <h1>Loading...</h1>
}
