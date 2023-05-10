import React, { useState } from 'react'

const HookArray = () => {
  const biodata =[
    {
       name:'Praveen', age: 21
    },
    {
       name:'Kajal', age: 18
    },
    {
       name:'Ankit', age: 25
    }
  ]
  const [clear,setClear]=useState(biodata)
  const clearArray=()=>{
   setClear([])
  }
 

  return (
    <div>
        <h1>useState Hook with Array</h1>
        {
          clear.map((userdata)=>{
         return   <h1 className='h1style'>My Name is : {userdata.name} and My age : {userdata.age}</h1>
          })
        }
        <button className='btn' onClick={clearArray}>Clear</button>

    </div>
  )
}

export default HookArray