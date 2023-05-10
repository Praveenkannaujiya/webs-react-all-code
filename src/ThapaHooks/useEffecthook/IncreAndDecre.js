import React,{useState} from 'react'

const IncreAndDecre = () => {
    const[count,setCount]=useState(0)
     
const increment=()=>{
    setCount(count+1)
}
const decrement=()=>{
    setCount(count-1)
}
  return (
    <div>
        <h1> Increment And Decrement</h1>
        <h1>{count}</h1>
        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default IncreAndDecre