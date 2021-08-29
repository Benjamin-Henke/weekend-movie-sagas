import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../App/App.css'

// from Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    },
}));


function AddMovie() {
    // give hooks variables to use
    const history = useHistory();
    const dispatch = useDispatch();

    // save user data to be dispatched
    const [movie, setMovie] = useState({
        title: '',
        poster: '',
        genre: '',
        description: ''
    })

    // handles the user inputs and creates 1 object
    const handleInputChange = (event) => {
        setMovie({
            // Spread-operator
            // Handles all user inputs
            ...movie,
            [event.target.name]: event.target.value,
        });
    } // end handleInputChange

    // function to be run when SAVE is clicked
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

        // return back to movie list page
        history.push('/Movie_List')
    } // end saveMovie

    return (
        <div id="addMovieForm">

            <form  onSubmit={saveMovie}>
                <TextField 
                    TextField id="filled-basic" 
                    label="Title" 
                    name="title"
                    value={movie.title}
                    onChange={handleInputChange}/>


                <br />

                <TextField 
                    TextField id="filled-basic" 
                    label="Poster URL"
                    name="poster" 
                    value={movie.poster}
                    onChange={handleInputChange}/>

                <br />

                <Select
                    labelId="genre"
                    id="demo-simple-select"
                    name="genre"
                    value={movie.genre}
                    onChange={handleInputChange}
                >
                    <MenuItem value="" disabled> Genre </MenuItem>
                    <MenuItem value="Adventure">Adventure</MenuItem>
                    <MenuItem value="Animated">Animated</MenuItem>
                    <MenuItem value="Biographical" >Biographical</MenuItem>
                    <MenuItem value="Comedy">Comedy</MenuItem>
                    <MenuItem value="Disaster">Disaster</MenuItem>
                    <MenuItem value="Drama">Drama</MenuItem>
                    <MenuItem value="Epic">Epic</MenuItem>
                    <MenuItem value="Fantasy">Fantasy</MenuItem>
                    <MenuItem value="Musical">Musical</MenuItem>
                    <MenuItem value="Romantic">Romantic</MenuItem>
                    <MenuItem value="Science Fiction">Science Fiction</MenuItem>
                    <MenuItem value="Space">Space - Opera</MenuItem>
                    <MenuItem value="Superhero">Superhero</MenuItem>
                </Select>

                <br />

                <TextField 
                    TextField id="filled-basic" 
                    label="Description" 
                    name="description"
                    value={movie.description}
                    onChange={handleInputChange}
                    multiline
                    minRows={5}
                    maxRows={50}/>

                <br />

                <button type="submit">Save</button>
                <button onClick={() => {
                    history.push('/Movie_List');
                }}>Cancel</button>
                
            </form>


            {/* OLD FORM W/O MATERIAL UI, still works
            <form className={classes.root} onSubmit={saveMovie}>
            
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
                <button onClick={() => {
                    history.push('/Movie_List');
                }}>Cancel</button>
            </form> */}
        </div>
    )
}

export default AddMovie;

