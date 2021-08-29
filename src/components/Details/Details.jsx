import { useSelector } from 'react-redux';

function Details() {
    const details = useSelector(store => store.details);

    return (
        <>
            <img src={details.poster} />
            <p>{details.description}</p>
        </>
    )
}

export default Details;