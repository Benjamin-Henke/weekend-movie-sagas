import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import './MovieList.css';
import Details from '../Details/Details';

function MovieList() {

    // Give hooks variables to use
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

  
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <br />
                            <button onClick={ () => {
                                console.log('Clicked movie:', movie.title);
                                history.push('/details');
                            }}>Details</button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;