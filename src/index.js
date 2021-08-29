import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('MOVIE_GENRES', movieGenres);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
} // end fetchAllMovies

function* addMovie(action) {
    // add movie to the DB
    let newMovie = action.payload;
    try {
        const response = yield axios.post('/api/movie', newMovie);
        console.log(response);
        fetchAllMovies();
        
    } catch {
        console.log('post error');
        
    }
} // end addMovie

function* movieGenres(action) {
    let movie = action.payload;
    try {
        const response = yield axios.get(`/api/movie/${movie.id}`);
        console.log('API response', response.data);
        
    } catch {
        console.log('get genres error');
        
    }
} // end movieGenres

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Store movie details after being clicked to be appended to DOM
const details = (state = [], action) => {
    switch (action.type) {
        case "MOVIE_DETAILS":
            return action.payload
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        details,
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
