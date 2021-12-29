import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvider from './contexts/Authprovider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
// import ManageAllOrder from './Pages/DashBoard/ManageAllOrderPage/ManageAllOrder';
// import ManageProducts from './Pages/DashBoard/ManageProducts/ManageProducts';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router path="/navigation">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/explore">
              <Explore />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/manageorder">
              <ManageAllOrder />
            </Route> */}
            {/* <Route path="/manageproducts">
              <ManageProducts />
            </Route> */}
            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;