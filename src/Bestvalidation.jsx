import React, { useState } from 'react'

const Bestvalidation = () => {
  let x = new Date().toLocaleTimeString()
  const [time,setTime]=useState(x)
  const update=()=>{
    setTime(new Date().toLocaleTimeString())
  }
  return (
    <div>
        <h1>Current Time</h1>
        <h1>{time}</h1>
        <button onClick={update}> Current Time</button>
    </div>
  )
}

export default Bestvalidation