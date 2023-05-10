import React, { useEffect } from 'react'
const PropUseEffect = (props) => {
    useEffect(()=>{
        alert("Counter pr chal rha hai ye alert ")
    },[props.x])
    useEffect(()=>{
        console.log('item trigger')
    },[props.y])
  return (
    <div>
        <h1>Count {props.x}</h1>
        <h1>data {props.y}</h1>
    </div>
  )
}

export default PropUseEffect

// ye UseEfect.jsx m import h