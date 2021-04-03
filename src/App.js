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
import Checkout from './Components/Checkout/Checkout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import AddProduct from './Components/AddProduct/AddProduct';

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
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>

          <Route path='/admin' exact>
            <AddProduct></AddProduct>
          </Route>
          <Route path='/addProduct'>
            <AddProduct></AddProduct>
          </Route>
          <Route path='/manageProduct'>
            <ManageProduct></ManageProduct>
          </Route>
          
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
