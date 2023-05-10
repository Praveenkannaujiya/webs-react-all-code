import React, { useState } from 'react'

const Formh = () => {
    const [name,setName]=useState('')
    const [maja,setMaja]=useState('')
    const [tnc,setTNC]=useState('')
    const [print,setPrint]=useState(false)
 const submitform=(e)=>{
    e.preventDefault()
    setPrint(true)
 }
  return (
    <div className='formankit'>
        {print?<p> Your Name {name} , and Movie Name {maja}</p>:" "}
        <h1>Form Handle</h1>
       

        <form action="" onSubmit={submitform}>

            <label>Enter Name </label> 

            <input type="text" onChange={(e)=>setName(e.target.value)} /> <br /> <br />


           <select onChange={(e)=>setMaja(e.target.value)}>
            <option>select Option</option>
            <option>Marvel</option>
            <option>DC</option>
            <option>Cartoon hub</option>

           </select> <br />
            <input type="checkbox" onChange={(e)=>setTNC(e.target.checked)} /> <span>Accept all Term & Conditions </span> <br />

            <button type='submit'>Submit</button>
        </form>
          
    </div>
  )
}

export default Formh