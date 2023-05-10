import React from 'react'
import { useState } from 'react'

const Controlled = () => {
    const [val,setVal]=useState('')

  return (
    <div>
        <h1>Controlled</h1>
        <input type="text"  value={val} onChange={(e)=>setVal(e.target.value)} />
        <h2>Name : {val}</h2>
    </div>
  )
}

export default Controlled