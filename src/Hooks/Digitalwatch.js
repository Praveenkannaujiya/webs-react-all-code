import React, { useState } from 'react'

const Digitalwatch = () => {
    let x= new Date().toLocaleTimeString()
    const[time,setTime]=useState(x)
    const update=()=>{
        x= new Date().toLocaleTimeString()
        setTime(x)
    }
 setInterval(update,1000)

  return (
    <div>
        <h1>Digitalwatch</h1>
        <h1>{x}</h1>
    </div>
  )
}

export default Digitalwatch