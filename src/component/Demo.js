import React, { useState } from 'react'
import Login from './Login'
import Home from './Home'

const Demo = () => {
    const [islogin,setIslogin]=useState(false)

    


  return (
    <div>
        <h1>demo</h1>

        {
            islogin ? <Home/>: <Login log={(data)=>setIslogin(data)}/>  // child se parent m data transfer
        }
    </div>
  )
}

export default Demo


//paraent