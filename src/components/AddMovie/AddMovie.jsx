import { useState } from 'react';
import {useHistory} from 'react-router-dom';


function AddMovie() {
    const history = useHistory();

    const saveMovie = (event) => {
        event.preventDefault();
        console.log('Saved new movie');
    }

    return (
        <div id="addMovie">
            <form onSubmit={saveMovie}>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Poster URL" />
                <label>Choose a Genre:</label>
                <select className="genres">
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
            <textarea id="movieDescription" placeholder="Description" rows="4" cols="65"></textarea>
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

// 1	Adventure
// 2	Animated
// 3	Biographical
// 4	Comedy
// 5	Disaster
// 6	Drama
// 7	Epic
// 8	Fantasy
// 9	Musical
// 10	Romantic
// 11	Science Fiction
// 12	Space - Opera
// 13	Superhero