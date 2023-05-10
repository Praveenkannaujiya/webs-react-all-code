import React, { useEffect, useState } from 'react'

const SelfUseEff = () => {
    
    const [counter,setCounter]=useState(0)
    const [count,setCount]=useState(50)

    useEffect(()=>{
        alert("Hello Use Counter" + counter)
        console.log('hlo')
    },[counter])

  return (
    <div>
        <h1>SelfUseEff Program</h1>
        <h2>Count {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>Click</button>
        <h2>Count {count}</h2>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default SelfUseEff