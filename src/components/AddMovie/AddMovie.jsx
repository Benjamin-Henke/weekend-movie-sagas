import { useState } from 'react';
import Select from 'react-select';
import {useHistory} from 'react-router-dom';


function AddMovie() {
    const history = useHistory();

    const [movie, setMovie] = useState({
        title: '',
        url: '',
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
                    name="url"
                    value={movie.url}
                    onChange={handleInputChange}
                    />
                <label>Choose a Genre:</label>
                <select className="genres" name="genre" value={movie.genre} onChange={handleInputChange}>
                    <option value="" disabled selected hidden>Select Genre</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option name="Biographical">Biographical</option>
                    <option name="Comedy">Comedy</option>
                    <option name="Disaster">Disaster</option>
                    <option name="Drama">Drama</option>
                    <option name="Epic">Epic</option>
                    <option name="Fantasy">Fantasy</option>
                    <option name="Musical">Musical</option>
                    <option name="Romantic">Romantic</option>
                    <option name="Science Fiction">Science Fiction</option>
                    <option name="Space - Opera">Space - Opera</option>
                    <option name="Superhero">Superhero</option>
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

