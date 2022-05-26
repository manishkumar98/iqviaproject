import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonG from "../components/ButtonG";
import { decodeToken } from "react-jwt";


function Welcome() {
  const navigate=useNavigate();
  const handleClickedLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  useEffect(()=>{
    const token=localStorage.getItem('token');
    console.log("token",token);
    if(!token){
      navigate('/login');
    }
  },[]);
  return (<>
  <div style={{marginLeft: 700}}>
  <div  style={{marginLeft:120, marginTop: 100, fontSize: 30, marginBottom: 100}}>Welcome</div>
  <div  style={{marginLeft:120, marginTop: 100, fontSize: 30, marginBottom: 100}}>
  <ButtonG name={'LogOut'} clickResponse={(clicked)=>handleClickedLogout(true)}/>
  </div>
  </div>
  </>)
}
export default Welcome;
