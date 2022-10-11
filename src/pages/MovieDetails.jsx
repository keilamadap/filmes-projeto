import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const MovieDetails = () => {
    const { id } = useParams();

    return (
        <main>
            <section className="details-header">
            <Navbar />
                <section className="details-section">
                    <img src="https://i.pinimg.com/originals/d6/f8/d7/d6f8d7b5cc1fca0665359e2b99458d41.jpg" />
                <section>
                    <h1>Título</h1>

                    <section className="summary">
                        <p>Classificação etária</p>
                        <p>Data lançamento</p>
                        <p>Gêneros</p>
                        <p>Duração</p>
                    </section>

                    <div>
                        Avaliação usuários porcentagem
                    </div>
                    <p>Avaliação dos usuários</p>

                    <section>
                    <h3>Sinopse</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis velit ab asperiores aperiam consequatur eius ducimus dolor temporibus inventore! Vero quam aut perspiciatis voluptates iusto fugit iste nostrum saepe!
                    Veritatis cumque fugiat nisi minus molestiae culpa quod, sunt nobis sapiente ipsa non. Ad atque saepe aut illo repudiandae, fugiat facere dolorem ipsam fuga laboriosam corrupti laudantium, itaque pariatur vel.
                    Deleniti at, neque similique corporis reiciendis eveniet placeat eos necessitatibus accusamus magni sit, dolorem non pariatur ullam nesciunt? Eligendi incidunt odio explicabo officiis perspiciatis tempora culpa doloremque dolores optio quos?</p>
                </section>

                <section>
                    <div>
                        <h4>nome</h4>
                        <p>Characters</p>
                    </div>
                </section>
                    
                </section>

                </section>
            </section>
        </main>
    )
}

export default MovieDetails;