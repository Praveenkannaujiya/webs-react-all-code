import React, { useState } from 'react'

const HideshowToggle = () => {
    const [data,setData]=useState(true)

  return (
    <div>
        {data?<h1>Hide Show</h1> : ''}
        <button onClick={()=>setData(false)}> Hide </button>
        <button onClick={()=>setData(true)}> Show </button>
        <button onClick={()=>setData(!data)}> Toggle </button>
    </div>
  )
}

export default HideshowToggle