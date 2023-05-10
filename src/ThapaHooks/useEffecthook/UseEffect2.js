import React from 'react'
import { useEffect ,useState } from 'react'

const UseEffect2 = () => {
    const[count,setCount]=useState(0)
    useEffect( ()=>{
        console.log('first UseEffect Run')
        if(count>=1){
          document.title = `Chat(${count})`       //ye title ka name change kr ke chat kr dega or counter chala dega 
        }
        else{
          document.title = `Chat`
        }
        
    },[count])
    useEffect( ()=>{
        console.log("Second UseEffect Run Now ")
    })
    console.log("Return function k just uper ")
  return (
    <div>
        <h1>UseEffect chat counter</h1>
        <h1>{count}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default UseEffect2