import React, {useEffect, useState, useRef} from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/Requests';
import { IconContext } from 'react-icons';
import {IoChevronForwardSharp, IoChevronBackSharp} from 'react-icons/io5';
import {Button} from 'react-scroll';

export default function Row({type, title, clickedFilm, films}) {

    const [arr, setArr] = useState([]);

    const scrollBtn = (e) => {
        let parent = e.target.parentNode;
        if(parent.localName == 'svg') {
            parent = parent.parentNode;
        }
        parent.scrollLeft += 200;
        console.log(parent.scrollLeft);
    };

    useEffect(() => {
        (async () => {
            if(!films) {
                const res = await axios.get(requests[type]);
                setArr(res.data.results);
            }else{
                setArr(films);
            }
        })();
    }, []);
    // console.log(arr);
    return (
        <div className='rowParent'>
            <h2 style={{color: 'white', marginLeft: '3%'}}>{title}</h2>

            <div className='rowContainer'>
                <div className='row'>
                    {arr.map((film, index) => {
                        // console.log(`https://image.tmdb.org/t/p/original/${film.poster_path}`)
                        return (
                            <img id={index} key={index} onClick={() => clickedFilm(film)} src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} width='150' height='250' />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
