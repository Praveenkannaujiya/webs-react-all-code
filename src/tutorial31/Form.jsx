import React, { useState } from 'react'

const Form = () => {
    const [data,setData]=useState('')
    const [print,setPrint]=useState('')
    const inputhandler  =(e)=>{
        e.preventDefault()
        setData(e.target.value)
    }
    const  clkbtn =()=>{
        setPrint(data)
    }
  return (
    <div>
        <h1>Form {print}</h1>
      
        <input type="text" value={data} onChange={inputhandler}/>
        <button onClick={clkbtn} >submit</button>
        
    </div>
  )
}

export default Form