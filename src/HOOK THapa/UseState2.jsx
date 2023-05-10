import React, { useState } from 'react'

const UseState2 = () => {
    const [data , setData]=useState('Praveen kannaujiya')
    const btnclick=()=>{
       let x = data;
       if(x==="Praveen kannaujiya"){
        setData("deny Bhai")
       }
       else{
        setData("Praveen kannaujiya")
       }
       
    }
  return (
    <div>
        <h1>UseState2</h1>
        <h2>{data}</h2>
        <button className='btn' onClick={btnclick}>State Change</button>
    </div>
  )
}

export default UseState2