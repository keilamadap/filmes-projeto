import Category from "./Category";
import Navbar from "./Navbar";

const Header = () => {
    
    return (
        <>
            <Navbar />
            <main className="info-top">
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
                <p>FILTRE POR:</p>
                <section>
                    <Category />
                </section>
            </main>
        </>
    )
}

export default Header;