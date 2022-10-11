import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPopular, getSingleMovie } from "../API/api";

const Movie = () => {
    const [filmes, setFilmes] = useState('');
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const [movieId, setMovieId] = useState();
    const history = useHistory();

    useEffect(() => {
        getPopular()
        .then((response) => {
            setFilmes(response.data.results)
            console.log(response.data)
        })
        .catch(err => console.log(err));
    }, [])

    const selectMovie = (movie) => {
        getSingleMovie(movie);
        history.push(`/details/${movie}`);
    }

    return (
        <section className="filmes-container">

            {filmes ? filmes.map((filme)=> {
                return (
                    <div key={filme.title} className="movie-info" onClick={(e) => selectMovie(filme.id)}>
                        <img src={imgBaseUrl + filme.poster_path} />
                        <p className="movie-title">{filme.title}</p>
                        <p className="movie-date">{filme.release_date}</p>
                    </div>
                )
            }) : null}
        </section>

    )

}

export default Movie;