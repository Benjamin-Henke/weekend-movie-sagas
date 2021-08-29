import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css';

// Imported from Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        width: 185,
        height: 273,
    },
});

export default function MovieCard( {movie}) {
    // Give hooks variables to use
    const dispatch = useDispatch();
    const history = useHistory();

    // from Material UI
    const classes = useStyles();


    return (
            <Card className={classes.root} elevation={3}>
                <CardMedia
                    className={classes.media}
                    image={movie.poster}
                />
            <CardActions>
                <Button 
                    size="small" 
                    color="primary"
                    onClick={() => {
                        console.log('Click', movie.title);
                        dispatch({
                            type: "MOVIE_DETAILS",
                            payload: movie
                        })
                        history.push('/Details');
                    }}>
                    Details
                </Button>
            </CardActions>
        </Card>       
    )
}