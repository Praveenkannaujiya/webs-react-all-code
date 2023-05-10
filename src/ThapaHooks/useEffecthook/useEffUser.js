import React, { useEffect } from 'react'

const UseEffUser = (props) => {
    useEffect(()=>{
        alert("ye useEffect Data pr chal raha hai :  " + props.item)
    },[props.item])

    useEffect(()=>{
        alert("ye useEffect count pr chal raha hai : " + props.item2)
    },[props.item2])
    
  return (
    <div>
        <h1>data : {props.item}</h1>
        <h1>count : {props.item2}</h1>
    </div>
  )
}

export default UseEffUser