import React, { useState } from "react";
import ButtonG from "../components/ButtonG";
import axios from 'axios';
function Login() {
    const [clicked,setClicked]=useState(false);
    const [email,setEmail]=useState("");
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
                password
            })
        }
       const response= await fetch('http://localhost:4000/api/register',data);
        const res=await response.json();
        console.log(res);

    }
  return (<>
  <div style={{marginLeft: 700}}>
    <div style={{marginLeft:120, marginTop: 100, fontSize: 30, marginBottom: 100}}> Welcome to IQVIA</div>
    <form action="" onSubmit={submitForm}>
        <div>
            <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
    </form>
    </div>
  </>);
}
export default Login;
