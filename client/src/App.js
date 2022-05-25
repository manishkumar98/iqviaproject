import {Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/ForgotPassword";
import { Fragment } from 'react';
//import { BrowserRouter as Switch} from 'react-router-dom';
function App() {
  return(<>
    <BrowserRouter>
        <Route exact path="/register" component={Signup}/>
        <Route exact path="/login" component={Login}/>
    </BrowserRouter>
    <Login/>
    </>
  )
  /*return (
    <BrowserRouter>
    <Routes>
     <Route exact path={"/Signup"} component={Signup}/>
     <Route exact path={"/ForgotPassword"} component={ForgotPassword}/>
     <Route exact path={"/Welcome"}><Welcome/></Route>
     <Route exact path={"/"}><Login/></Route>
     </Routes>
   </BrowserRouter>
  );*/
}

export default App;
