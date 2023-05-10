import React, { useState } from 'react'

const FormValidation = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)

    const submitform = (e)=>{
        e.preventDefault()
        if(name.length==0 || password.length==0)
        {
            setError(true)
        }

    }
  return (
    <>
        <form action="" onSubmit={submitform}>

        <h1>Form Validation</h1>
        

        <div>
        <input type="text"  onChange={(e)=>setName(e.target.value)} /> <br />
        </div>
{ error&&name.length<=0? <label className='w'>User Name Can't Blank</label> :''}
        

        <div>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} /> <br /> 
        </div>

        { error && password.length<=0? <label className='w'>Password Can't Blank</label> :''}        
<br />
        <button>Submit</button>

        </form>
    </>
  )
}

export default FormValidation