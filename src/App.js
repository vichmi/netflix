import Home from "./pages/Home/Home.js";
import Nav from './components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Movies from "./pages/Movies/Movies.js";
import Search from "./pages/Search/Search.js";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Nav a='asd' />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/404'>
          <h1 style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh'}}>404 Page Not Found</h1>
        </Route>
        
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
