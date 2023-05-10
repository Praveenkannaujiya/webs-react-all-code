import React, { useEffect, useState } from 'react'

const UsFect = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        if(count>5){
            alert('Your num is greater than 5 ')
        }
        else{
             alert('number is less than 5 ')
        }
    },[])
  return (
    <div>
        <h1>UseEffect</h1>
        <h2> hello Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Counter</button>
    </div>
  )
}

export default UsFect