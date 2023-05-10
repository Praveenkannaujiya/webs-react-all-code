import React, { useState } from 'react'

const Formvalidation = () => {
    const [name,setName]=useState()
    const [password,setPassword]=useState()
    const [nerror,setNError]=useState(false)
    const [perror,setPError]=useState(false)
    

    const submitform=(e)=>{
        e.preventDefault()
       if(name.length<3 || password.length<6){
        alert("fill all input field")
       }
       else{
        alert("all is right")
       }
    }
    const userhandler=(e)=>{
        let data=e.target.value
        if(data.length<3){
            setNError(true)
        }
        else{
            setNError(false)
        }
        setName(data)
    }
    const passwordhandler=(e)=>{
        let pass = e.target.value
        if(pass.length<6){
            setPError(true)
        }
        else{
            setPError(false)
        }
        setPassword(pass)
    }
   
  return (
    <div>
        <h1>Form validation</h1>
        <form action="" onSubmit={submitform}>

        <input type="text" onChange={userhandler} />           <br />
       
       {nerror?<p>Please Enter the Currect name</p>: ' '}
        <input type="text" onChange={passwordhandler} />        <br />
        {perror?<p>Please Enter the Currect Password</p>: ' '}
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formvalidation