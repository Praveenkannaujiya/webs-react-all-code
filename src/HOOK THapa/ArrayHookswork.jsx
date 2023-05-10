import React, { useState } from 'react'

const ArrayHookswork = () => {
    const data=[
        {name:'deny',  age : 21 , vill: "noida"},
        {name:'praveen',  age : 25 , vill: "Delhi NCR"},
        {name:'Ankit',  age : 45 , vill: "Mumbai"}

    ]
    const [clr,setClr]=useState(data)

    const cleardata=()=>{
        setClr([])
    }
  return (
    <div>
        <h1>Array work and Mapfunction</h1>

        {
            clr.map((item)=>{
                
           return(
            <h1> My name is : {item.name} My age :   {item.age}  and my village : {item.vill}</h1>
            
           )    
        })
        }

         <button onClick={cleardata}> Clear</button>

    </div>
  )
}

export default ArrayHookswork