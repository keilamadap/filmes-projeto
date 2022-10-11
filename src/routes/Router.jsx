import { BrowserRouter, Route, Switch } from "react-router-dom";
import Config from "../pages/Config";
import Homepage from "../pages/Homepage";
import MovieDetails from "../pages/MovieDetails";

const RouterLocal = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/details/:id">
                    <MovieDetails />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/config">
                    <Config />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterLocal;