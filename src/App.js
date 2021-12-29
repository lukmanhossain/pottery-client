import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
// import Products from './Pages/Products/Products';
// import Navigation from './Pages/Shared/Navigation/Navigation';
import NotFound from './Pages/NotFound/NotFound';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
// import AuthProvider from './Contexts/AuthProvider/AuthProvider';
// import Services from './Pages/Home/Services/Services';
// import BuyNow from './Pages/BuyNow/BuyNow/BuyNow';
// import Login from './Pages/Login/Login/Login';
// import Register from './Pages/Login/Register/Register';
// import Explore from './Pages/Explore/Explore';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import BuyNowModal from './Pages/BuyNow/BuyNowModal/BuyNowModal';
// import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
// import ManageAllOrder from './Pages/DashBoard/ManageAllOrderPage/ManageAllOrder';
// import ManageProducts from './Pages/DashBoard/ManageProducts/ManageProducts';


function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router path="/navigation">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            {/* <Route path="/services">
              <Services />
            </Route> */}
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/manageorder">
              <ManageAllOrder />
            </Route> */}
            {/* <Route path="/explore">
              <Explore />
            </Route> */}
            {/* <Route path="/manageproducts">
              <ManageProducts />
            </Route> */}
            {/* <Route path="/navigation">
              <Navigation></Navigation>
            </Route> */}
            {/* <PrivateRoute path="/buynow">
              <BuyNow></BuyNow>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute> */}
            {/* <Route path="/buynowmodal">
              <BuyNowModal></BuyNowModal>
            </Route> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      {/* </AuthProvider> */}
    </div >
  );
}

export default App;