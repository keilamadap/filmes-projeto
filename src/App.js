import './App.css';
import Header from './Header';
import MainPage from './pages/MainPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Config from './pages/Config';

function App() {
  return (
   <Router>
     <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/Config">
              <Config />
            </Route>
     
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
