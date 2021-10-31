import React, {useState} from 'react'
import Nav from '../../components/Nav/Nav';
import './Home.css'
import Banner from '../../components/Banner/Banner';
import Rows from '../../components/Row/Rows';
import { IconContext } from 'react-icons';
import {AiFillCloseCircle} from 'react-icons/ai';

const filmArrs = [
    {type: 'getNetflixOriginals', title: 'Netflix Originals'},
    {type: 'getTrending', title: 'Trending Now'},
    {type: 'getTopRated', title: 'Top Rated'},
    {type: 'getActionMovies', title: 'Actions Movies'},
    {type: 'getComedyMovies', title: 'Comedy Movies'},
    {type: 'getHorrorMovies', title: 'Horror Movies'},
    {type: 'getRomanceMovies', title: 'Romance Movies'},
    {type: 'getDocumentaries', title: 'Documentaries'}
]

export default function Home() {

    const [selectedMovie, setSelectedMovie] = useState({}); 
    const clickedFilmParent = (film) => {
        setSelectedMovie(film);
    }

    return (
        <div className='container'>
            <Nav />
            <Banner clickedFilmParent={clickedFilmParent} />
            <Rows clickedFilmParent={clickedFilmParent} data={filmArrs} />   

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
