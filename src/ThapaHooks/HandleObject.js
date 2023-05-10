import React, { useState } from 'react'

const HandleObject = () => {
    
    const [user ,setUser]=useState({   
        name:'Ajay', age: 18, city: 'Azamgarh'
    })
    const update=()=>{
        setUser({ ...user,  name:'Praveen',city:'Noida' })   // ... three dot called stpred operator
    }

  return (
    <div>
        <h1>HandleObject</h1>

        <h1>My Name : {user.name} and Age {user.age}  City {user.city}</h1>
        <button onClick={update}>Update</button>
        
        
      
    </div>
  )
}

export default HandleObject