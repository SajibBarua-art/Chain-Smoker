import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [userState, setUserState] = useState({});
  return (
    <UserContext.Provider value={[userState, setUserState]}>
      <h3>email: {userState.email}</h3>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
