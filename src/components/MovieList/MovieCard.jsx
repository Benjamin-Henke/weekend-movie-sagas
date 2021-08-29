import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// Imported from Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
    },
    media: {
        width: 185,
        height: 273,
        alignContent: 'center'
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
                <CardHeader 
                    title={movie.title}
                />
                <CardMedia
                    className={classes.media}
                    image={movie.poster}
                    onClick={() => {
                        console.log('Click', movie.title);
                        dispatch({
                            type: "MOVIE_DETAILS",
                            payload: movie
                        })
                        history.push('/Details');
                    }}
       
                />
            </Card>         
    )
}