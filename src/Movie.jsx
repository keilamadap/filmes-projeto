import { useEffect, useState } from "react";
import { getPopular } from "./API/api";

const Lista = () => {
    const listaFilmes = [
        {nome: 'Oi, Alberto', data: '12 nov 2021'},
        {nome: 'Clifford', data: '12 nov 2021'},
        {nome: 'Deadpool', data: '09 fev 2021'},
        {nome: 'Venom', data: '30 set 2021'},
        {nome: 'Zero e uns', data: '18 nov 2021'},
        {nome: 'Duna', data: '15 set 2021'},
        
   
    ];

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

            {filmes.map((filme)=> {
                return (
                    <div key={filme.title} className="info-filme">
                        <img src={imgBaseUrl + filme.backdrop_path} />
                        <p>{filme.title}</p>
                        <p className="data-filme">{filme.release_date}</p>
                    </div>
                )
            })}
        </section>

    )

}

export default Lista;