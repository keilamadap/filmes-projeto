import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Category from "../components/Category";
import Elenco from "../components/Elenco";
import ReactPlayer from "react-player";

const api_key = "4624345e635a614abd2677f6977efc2d";
const moviesURL = "https://api.themoviedb.org/3/movie/";
const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
const traillerBaseURL = "https://www.youtube.com/watch?v=";

const MovieDetails = () => {
  const { id } = useParams();
  const [elenco, setElenco] = useState("");
  const [detalhes, setDetalhes] = useState(null);
  const [videos, setVideos] = useState("");
  const [recomendo, setRecomendo] = useState("");

  // resgatando as informacoes dos filmes selecionados

  const getMovieDetails = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    setDetalhes(data);
  };
  // resgatando o elenco de cada filme

  const getElenco = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    setElenco(data);
  };
  // resgatando o trailler de cada filme

  const getVideos = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    setVideos(data);
    console.log(data);
  };

  const getRecomendo = async (url) => {
    const result = await fetch(url);
    const data = await result.json();

    setRecomendo(data);
  };

  useEffect(() => {
    const detalheURL = `${moviesURL}${id}?api_key=${api_key}&language=pt-BR`;
    getMovieDetails(detalheURL);
  }, []);

  useEffect(() => {
    const elencoURL = `${moviesURL}${id}/credits?api_key=${api_key}`;
    getElenco(elencoURL);
  }, []);

  useEffect(() => {
    const videoURL = `${moviesURL}${id}/videos?api_key=${api_key}`;
    getVideos(videoURL);
  }, []);
  // https://www.youtube.com/watch?v=6JnN1DmbqoU

  useEffect(() => {
    const recomendoURL = `${moviesURL}${id}/recommendations?api_key=${api_key}`;
    getRecomendo(recomendoURL);
  }, []);

  //tentando converter objeto para string
  const listaGeneros = (item) => {
    return item.toString();
  };

  // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  // https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

  return (
    <main>
      <section className="details-header">
        <Navbar />
        <section className="details-section">
          <div className="movie-details">
            {detalhes && (
              <>
                <h2 className="detalhe-title">
                  Titulo: {detalhes.title} ({detalhes.release_date})
                </h2>

                <p className="genres">
                  Generos: {listaGeneros(detalhes.genres)} , {detalhes.runtime}{" "}
                  minutos.
                </p>

                <b>Sinopse:</b>
                <br />
                <p className="overview">{detalhes.overview} </p>

                <img src={imgBaseUrl + detalhes.poster_path} />
              </>
            )}
          </div>
        </section>
      </section>
      <section className="elenco-pai">
        <h3>Elenco original</h3>
        <div className="elenco-container">
          {elenco
            ? elenco.cast.map((ator) => {
                return (
                  <ul elenco={ator} key={ator.name}>
                    {" "}
                    <img src={imgBaseUrl + ator.profile_path} alt={ator.name} />
                    {ator.name} / {ator.character}
                  </ul>
                );
              })
            : null}
        </div>

        <section className="movie-videos">
          <h3>Trailler</h3>
          <ReactPlayer url="traillerBaseURL"></ReactPlayer>
        </section>

        <section className="recommended-container">
          <h3>Recomendacoes</h3>
          <div className="recommended-list">
            {recomendo
              ? recomendo.results.map((recomendacao) => {
                  return (
                    <ul recomendo={recomendacao} key={recomendacao.id}>
                      <img
                        src={imgBaseUrl + recomendacao.poster_path}
                        alt={recomendacao.name}
                      />
                      <p> {recomendacao.title} </p>
                      <p>/ {recomendacao.release_date}</p>
                    </ul>
                  );
                })
              : null}
          </div>
        </section>
      </section>
    </main>
  );
};

export default MovieDetails;
