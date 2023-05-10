import React from 'react'
import { useState } from 'react'
const Inputbox = () => {
    const [inputval , setInputval]=useState("")
    const [print , setPrint]=useState(false)
    const inputvalue=(e)=>{
        setInputval(e.target.value)
        setPrint(false)
    }
  return (
    <div>
        <h1>Inputbox value Print with help of Button click </h1>

        { print? <h1>{inputval}</h1> : " " }
        
        <input type="text" onChange={inputvalue} />
        
        <button onClick={()=>setPrint(true)}>Click</button>

    </div>
  )
}

export default Inputbox