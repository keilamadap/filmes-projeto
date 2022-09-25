import { useEffect, useState } from "react";
import { getPopular } from "./API/api";

const Movie = () => {


    const [filmes, setFilmes] = useState('');
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        getPopular()
        .then((response) => {
            setFilmes(response.data.results)
            console.log(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="filmes-container">

            {filmes ? filmes.map((filme)=> {
                return (
                    <div key={filme.title} className="movie-info">
                        <img src={imgBaseUrl + filme.poster_path} />
                        <p>{filme.title}</p>
                        <p className="movie-date">{filme.release_date}</p>
                    </div>
                )
            }) : null}
        </section>

    )

}

export default Movie;