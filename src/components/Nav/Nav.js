import React, {useState, useEffect, useCallback} from 'react'
import './Nav.css';
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png';
import { IconContext } from 'react-icons';
import {FaSearch} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import requests from '../../utils/Requests';
import axios from '../../utils/axios';

export default function Nav({clickedFilmParent}) {
    const [transparent, setTransparent] = useState(true);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [films, setFilms] = useState([]);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchText('');
            setShowSearchBox(false);
        }
    }, []);

    const transitionY = () => {
        if(window.scrollY > 10) {
            setTransparent(false);
        }else{
            setTransparent(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionY);
        document.addEventListener("keydown", escFunction);

        return () => window.removeEventListener('scroll', transitionY);
    }, [escFunction]);

    return (
        <div className={`navbar ${transparent ? 'transparent' : 'black'}`}>
            <div className='content'>
                <a href='/'><img src={logo} className="logoimg" alt='Netflix Logo' /></a>
                <ul className="left">
                    <li><a href="/">Home</a></li>
                </ul>
                {!showSearchBox ? 
                <IconContext.Provider value={{ color: "white", className: "rightIcon", size: '1.3em' }}>
                        <FaSearch onClick={() => {
                            setShowSearchBox(true);
                        }} />
                </IconContext.Provider> :
                <div className='parentSearch'>
                    <div className='searchContainer'>
                        <div className='searchContent'></div>
                                <IconContext.Provider value={{ color: "white", className: "searchIcon", size: '1.3em' }}>
                                    <FaSearch  onClick={() => {
                                        setShowSearchBox(false);
                                    }} />
                                </IconContext.Provider>
                                <input type='text' placeholder='Enter film or series title' className='searchBox' autoFocus onChange={async e => {
                                    setSearchText(e.target.value);
                                    const res = await axios.get(requests.getSearched+e.target.value);
                                    setFilms(res.data.results);
                                }} />
                                {searchText.length > 0 ? <div className='searchContentContainer'>
                            {films.map((film, index) => {
                                return (
                                    <div key={index} className='searchFilmCon' onClick={() => {
                                        clickedFilmParent(film);
                                    }}>
                                        <h2>{film.title}</h2>
                                        {film.backdrop_path ? <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} /> : null}
                                    </div>
                                )
                            })}
                        </div> : null}
                    </div>
                    
                </div>}
                <img src={avatar} className="avatar" alt='avatar' onClick={() => {
                    window.location.href = '/profile'
                }} />
            </div>
        </div>
    )
}
