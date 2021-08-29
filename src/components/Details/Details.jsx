import { useSelector } from 'react-redux';
import '../App/App.css';


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

function Details() {
    // from Material UI
    const classes = useStyles();

    // pull data from redux store depending on what movie was clicked
    const details = useSelector(store => store.details);

    return (
        <div className="details">
            <h1>{details.title}</h1>
            <img className={classes.media} src={details.poster} />
            <p>{details.description}</p>
        </div>
    )
}

export default Details;