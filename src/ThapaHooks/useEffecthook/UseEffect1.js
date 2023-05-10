import React from 'react'
import { useEffect ,useState } from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0)
    useEffect( ()=>{
        if(count>=1){
          document.title = `Chat(${count})`       //ye title ka name change kr ke chat kr dega or counter chala dega 
        }
        else{
          document.title = `Chat`
        }
        
    })
  return (
    <div>
        <h1>UseEffect</h1>
        <h1>{count}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default UseEffect