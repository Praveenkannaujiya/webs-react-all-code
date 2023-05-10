import React from 'react'
import { useRef } from 'react'

const Uncontrolled = () => {
    let x=useRef(null)
    let y=useRef(null)
    let z= document.getElementById('inputId').value 

    const submitform =(e)=>{
        e.preventDefault()
        console.log("ref se x" , x.current.value)
        console.log("ref se  Y" , y.current.value)
        console.log("InoutId se " ,z )

    }
  return (
    <div>
        <h1>Uncontrolled Component </h1>
        <form onSubmit={submitform}> 
        <input type="text"  ref={x} />
        <input type="text"  ref={y} />
        <input type="text"  id='inputId' />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled