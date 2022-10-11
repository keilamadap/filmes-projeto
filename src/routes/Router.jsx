
import { Route, Router } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MovieDetails from "../pages/MovieDetails";

const RouterLocal = () => {
    return (
        <Router>
            <Route path="/details/id" element={MovieDetails} />
            <Route exact path="/" element={Homepage} />
        </Router>
    )
}

export default RouterLocal;