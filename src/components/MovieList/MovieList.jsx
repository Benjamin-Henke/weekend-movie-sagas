import React, { useEffect } from 'react';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';

import './MovieList.css';
import MovieCard from "./MovieCard";


function MovieList() {
    // Give hooks variables to use
    const dispatch = useDispatch();

    // Pull movie library from DB
    const movies = useSelector(store => store.movies);

    // On page load, display movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

  
    return (
        <div id="movieList">
                <Container>
                    <Grid container spacing={2}>
                            {movies.map(movie => {
                                return (
                                        <Grid item key={movie.id}>
                                            <MovieCard movie={movie}/>
                                        </Grid>
                                );
                            })}
                    </Grid>
                </Container>
        </div>

    );
}

export default MovieList;