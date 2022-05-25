import React from 'react';
import { useState } from 'react';
export default function ButtonG({clickResponse}){
    const [clicked,setClicked]=useState(false);
    const handleClick=()=>{
        setClicked(!clicked);
        clickResponse(clicked);
    }
    return(
        <>
        <div style={{backgroundColor: 'red', width: 120, paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, fontSize: 30, color: 'white'}} onClick={handleClick}>Continue</div>
        </>
    )
}