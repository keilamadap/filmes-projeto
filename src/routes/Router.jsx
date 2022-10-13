import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      </Switch>
    </BrowserRouter>
  );
};

export default RouterLocal;
