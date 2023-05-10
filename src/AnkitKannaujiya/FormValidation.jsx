import React, { useState } from'react'

const FormValidation=()=>{

    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const [err,setErr]=useState(false)
    const [passerr,setPasserr]=useState(false)

    const submitbtn=(e)=>{
        e.preventDefault()
        if(name.length<3 || pass.length<3){
            alert("please Fill all filedz")
        }
        else{
            alert("all Good thank you")
        }
    }

    const namehandler=(e)=>{
        let nameerror=e.target.value.length
        if(nameerror<3){
            setErr(true)
        }
        else{
            setErr(false)
        }
        setName(nameerror)
    }


    const passhandler=(e)=>{
        let passerror=e.target.value.length
        if(passerror<6){
            setPasserr(true)
        }
        else{
            setPasserr(false)
        }
        setPass(passerror)
    }
    return(
       <div className='formankit'>
         <h1>Normal validation</h1>
        <form onSubmit={submitbtn}>
        <input type="text"  placeholder='Enter Name' onChange={namehandler}/>   {err?<span>Please Enter Valid Name</span> : ''}  <br /><br />
      
         <input type="text" placeholder='Love' onChange={passhandler}/>  {passerr?<span> Enter Valid Password</span> : ''}       <br /> <br />

         <button>Submit</button>
        </form>

       </div>
    )
}
export default FormValidation