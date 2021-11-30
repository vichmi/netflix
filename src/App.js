import Home from "./pages/Home/Home.js";
import Nav from './components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import Profile from './pages/Profile/Profile';
import Landing from './pages/Login/Landing/Landing';
import {auth} from './utils/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {logout, login, selectUser} from './utils/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }else{
        dispatch(logout());
      }
    })

    return unsub;
  }, []);

  return (
    <Router>
      {!user ? <Landing /> : 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/404'>
            <h1 style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh'}}>404 Page Not Found</h1>
          </Route>
          
          <Redirect to='/404' />
      </Switch>
      }
    </Router>
  );
}

export default App;
