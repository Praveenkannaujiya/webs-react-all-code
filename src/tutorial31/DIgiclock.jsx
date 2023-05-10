import React, { useState } from 'react'

const DIgiclock = () => {
    let x = new Date().toLocaleTimeString()
    const[time,setTime]=useState(x)

    const update=()=>{
        x=new Date().toLocaleTimeString()
        setTime(x)
    }
    
    setInterval(update,1000)


  return (
    <div>

        <h1>Digital Clock : {time}</h1>
    
    </div>
  )
}

export default DIgiclock