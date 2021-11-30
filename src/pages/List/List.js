import React, {useState} from 'react'
import Nav from '../../components/Nav/Nav';
import './Home.css'
import Banner from '../../components/Banner/Banner';
import Rows from '../../components/Row/Rows';
import { IconContext } from 'react-icons';
import {AiFillCloseCircle} from 'react-icons/ai';


export default function List() {

    const [selectedMovie, setSelectedMovie] = useState({}); 
    const clickedFilmParent = (film) => {
        setSelectedMovie(film);
    }

    return (
        <div className='container'>
            <div style={{
                opacity: selectedMovie.id ? 0.2 : 1
            }}>
            <Nav clickedFilmParent={clickedFilmParent} />
            </div>  

            {selectedMovie.id ? <div className='filmInfoContainer'>
                <div>
                    <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} />
                    <h1>{selectedMovie.title || selectedMovie.name}</h1>
                    <p>{selectedMovie.overview}</p>
                </div>

                <IconContext.Provider value={{ color: "white", className: "closedIcon", size: '3em' }}>
                        <AiFillCloseCircle onClick={(e) => {
                            setSelectedMovie({});
                        }} />
                </IconContext.Provider>
            </div> : null} 
        </div>
    )
}
