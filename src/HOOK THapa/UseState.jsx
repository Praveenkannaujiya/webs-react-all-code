import React, { useState } from 'react'

const UseState = () => {
    const [data , setData]=useState('Praveen kannaujiya')
    const btnclick=()=>{
       
       setData("praveenkannaujiya0@gmail.com")
    }
  return (
    <div>
        <h1>UseState</h1>
        <h2>{data}</h2>
        <button className='btn' onClick={btnclick}>State Change</button>
    </div>
  )
}

export default UseState