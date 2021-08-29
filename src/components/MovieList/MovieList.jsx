import React, { useEffect } from 'react';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';

import './MovieList.css';
import MovieCard from "./MovieCard";


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
        <div>
            <h1>Movie List</h1>
                <Grid container spacing={3}>
                    {movies.map(movie => {
                        return (
                            <Container>
                                <Grid item key={movie.id}>
                                    <MovieCard movie={movie}/>
                                </Grid>
                            </Container>
                        );
                    })}
                </Grid>
        </div>

    );
}

export default MovieList;