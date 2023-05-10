import React, { useState } from 'react'

const Login = (props) => {
    console.log(props)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
 

    const submitform=(e)=>{
      e.preventDefault()
      setPassword(e.target.value)
      setEmail(e.target.value)
      
    }

  return (
    <>
        
        <h3>login Page</h3>
        <form action="" onSubmit={submitform}>
        <label htmlFor="email">Email</label>
        <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        <p>  {email} </p>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        

        
         <button onClick={()=>props.log(true)}> Submit </button>

         
        
        </form>
        
    </>
  )
}

export default Login