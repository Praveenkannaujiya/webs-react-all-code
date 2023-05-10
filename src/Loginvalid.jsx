import React, { useState } from 'react'

const Loginvalid = () => {
    const[name,setName]=useState('')
    const [error,setError]=useState(false)
    const submithandler=(e)=>{
        e.preventDefault()
        if(name==='' || name.length<3 ){
            alert('Input Box Can`t Empty fill data up to 3 digit')
        }
        else{
            alert('Thank You')
        }
    }
    const userhandler =(e)=>{
        let item= e.target.value
        if(item.length<3)
        {
            setError(true)
        }
        else{
            setError(false)
        }
        setName(item)
    }
  return (
    <div>
        <h1>Loginvalid</h1>

        <form  onSubmit={submithandler}>

            <input type="text" onChange={userhandler} />

            { error? <p>Name Not Valid</p>:'' }

            <br />

            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Loginvalid