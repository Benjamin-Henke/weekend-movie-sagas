import React, { useEffect } from 'react';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';

import './MovieList.css';


function MovieList() {
    // Give hooks variables to use
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    const [movieDetails, setMovieDetails] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

  
    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">

                <Grid container>
                {movies.map(movie => {
                    return (
                        <Container>
                            <Grid item key={movie.id} md={2}>
                                <Paper>
                                    <h4>{movie.title}</h4>
                                    <img className="posters"
                                        src={movie.poster}
                                        alt={movie.title}
                                        onClick={() => {
                                            console.log('Click', movie.title);
                                            dispatch({
                                                type: "MOVIE_DETAILS",
                                                payload: movie
                                            })
                                            history.push('/Details');
                                        }} />
                                </Paper>
                            </Grid>
                        </Container>
                    );
                })}
                </Grid>
            </section>
        </main>

    );
}

export default MovieList;