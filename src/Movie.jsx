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

    getPopular()
    .then((response) => {
        console.log(response)
    })

    return (
        <section className="filmes-container">

            {listaFilmes.map((filme)=> {
                return (
                    <div key={filme.nome} className="info-filme">
                        <p>{filme.nome}</p>
                        <p className="data-filme">{filme.data}</p>
                    </div>
                )
            })}
        </section>

    )

}

export default Lista;