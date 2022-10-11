import axios from 'axios';

// chave privada da API TMDB
const apiKey = '27356b4d294f73dd67d7feb0d32d50e9';

// token para autorizar os requests
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzM1NmI0ZDI5NGY3M2RkNjdkN2ZlYjBkMzJkNTBlOSIsInN1YiI6IjYxZjk0MmFhNTU5ZDIyMDAxYjkyYWI3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y62eLY7i9s6V-Ixjw0c2Hdc6upXju-_XzifqBz2-m3c';

// URL base para definir as rotas
const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 5000,
});

// função para obter os filmes mais populares
export const getPopular = async (token) =>
    await API.get('/discover/movie?sort_by=popularity.desc&api_key=27356b4d294f73dd67d7feb0d32d50e9', {
        headers: { Authorization: `Bearer ${token}` },
    });

// função para obter a lista de gêneros de filmes
export const getGenres = async (token) =>
    await API.get('/genre/movie/list?api_key=27356b4d294f73dd67d7feb0d32d50e9', {
        headers: { Authorization: `Bearer ${token}` },
    });

// função para obter os detalhes de um único filme
export const getSingleMovie = async (token, movieId) =>
    await API.get(`/movie/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });