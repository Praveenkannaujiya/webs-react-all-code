import React, { useState } from 'react'
import UseEffUser from'./useEffUser'
const UseEffProps = () => {
    const[data,setData]=useState(1)
    const[count,setCount]=useState(10)
  return (
    <div>
        <h1>useEffProps</h1>

        <UseEffUser item={data} item2={count}/>
        <button onClick={()=>setData(data+1)}>click data</button>
        <button onClick={()=>setCount(count+1)}>click Count</button>
    </div>
  )
}

export default UseEffProps