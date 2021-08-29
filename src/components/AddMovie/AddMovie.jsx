import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [movie, setMovie] = useState({
        title: '',
        poster: '',
        genre: '',
        description: ''
    })

    const handleInputChange = (event) => {
        setMovie({
            // Spread-operator
            // Handles all user inputs
            ...movie,
            [event.target.name]: event.target.value,
        });
    } // end handleInputChange

    const saveMovie = (event) => {
        event.preventDefault(event);
        console.log('Saved new movie', movie);

        // dispatch movie to redux-saga
        dispatch({
            type: "ADD_MOVIE",
            payload: movie
        })

        // clear user inputs
        setMovie({
            title: '',
            poster: '',
            genre: '',
            description: ''
        })
    } // end saveMovie

    return (
        <div id="addMovie">
            <form onSubmit={saveMovie}>
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    value={movie.title}
                    onChange={handleInputChange}
                />
                <input 
                    type="text" 
                    placeholder="Poster URL"
                    name="poster"
                    value={movie.poster}
                    onChange={handleInputChange}
                    />
                <label>Choose a Genre:</label>
                <select className="genres" name="genre" value={movie.genre} onChange={handleInputChange}>
                    <option value="" disabled selected hidden>Select Genre</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space - Opera">Space - Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>

                <br />

                <textarea 
                    id="movieDescription" 
                    placeholder="Description" 
                    name="description"
                    value={movie.description}
                    onChange={handleInputChange}
                    rows="4" 
                    cols="65">
                </textarea>

                <br />

                <button type="submit">Save</button>
            </form>
            <button onClick={() => {
                history.push('/Movie_List');
            }}>Cancel</button>
        </div>
    )
}

export default AddMovie;

