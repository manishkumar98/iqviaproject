import {Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/Welcome";
import { Fragment } from 'react';
//import { BrowserRouter as Switch} from 'react-router-dom';
function App() {
  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Welcome/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
