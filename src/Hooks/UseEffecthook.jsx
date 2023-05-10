import React, { useState } from 'react'
import PropUseEffect from './PropUseEffect'
const UseEffecthook = () => {
  const [count ,setCount]=useState(10)
  const [data,setData]=useState(25)
  return (
    <div>
        <h1>UseEffecthook</h1>

        <PropUseEffect x={count} y={data}/>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        <button onClick={()=>setData(data+1)}>Data </button>
    </div>
  )
}

export default UseEffecthook

// ye hookApp m import h