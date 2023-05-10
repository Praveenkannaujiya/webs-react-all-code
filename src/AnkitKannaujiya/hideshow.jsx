import React, { useState } from 'react'

const Hideshow = () => {
    const[hideshow,setHideShow]=useState(false)
  return (
    <div>
       {hideshow? <h1>hideshow Button toggle</h1> : ""}
        <button onClick={()=>setHideShow(false)} >Hide</button>
        <button onClick={()=>setHideShow(true)}>show</button>
        <button onClick={()=>setHideShow(!hideshow)}>Toggle</button>
    </div>
  )
}

export default Hideshow