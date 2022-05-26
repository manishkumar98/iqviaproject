import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ButtonG from "../components/ButtonG";
import axios from 'axios';
function Login() {
    const navigate= useNavigate();
    const [clicked,setClicked]=useState(false);
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    async function submitForm(e){
        e.preventDefault();
        //console.log(email);
        //console.log(password);
        const data={
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                name
            })
        }
       const response= await fetch('http://localhost:4000/api/register',data);
        const data1=await response.json();
        if(data1.status==='error'){
            if(data1.error==='Duplicate email'){
                alert('Please use other email as it is already taken');
            }
        }
        if(data1.status==='ok'&&localStorage.getItem('token'))
            navigate('/login');
        console.log(data1);

    }
  return (<>
  <div style={{marginLeft: 700}}>
    <div style={{marginLeft:120, marginTop: 100, fontSize: 30, marginBottom: 100}}> Welcome to IQVIA</div>
    <form action="" onSubmit={submitForm}>
    <div>
            <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit">Signup</button>
    </form>
    </div>
  </>);
}
export default Login;
