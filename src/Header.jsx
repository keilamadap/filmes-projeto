import Category from "./Category";
import Navbar from "./Navbar";

const Header = () => {
    
    return (
        <>
            <Navbar />
            <div className="info-top">
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
                <p>FILTRE POR:</p>
                <div>
                    <Category />
                </div>
            </div>
        </>
    )
}

export default Header;