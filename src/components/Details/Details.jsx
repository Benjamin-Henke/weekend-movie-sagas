import { useSelector } from 'react-redux';

function Details() {
    const details = useSelector(store => store.details);

    return (
        <>
            <h1>{details.title}</h1>
            <img src={details.poster} />
            <p>{details.description}</p>
        </>
    )
}

export default Details;