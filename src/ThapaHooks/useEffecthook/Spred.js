import React from 'react'

const Spred = () => {
    const user =[" Praveen Kannaujiya ", 25]
    const data= [1 , ...user , 'Azamgarh']  // spread operator ...user jo hai concatinat krta hai data ko
    console.log(user)                       // ...user me [Praveen Kannaujiya 25] data aa gya
    console.log(data)                       //...user ko use kr liya gya  
  return (
    <div>
        <h1>Spred Operator</h1>
        <h2>{user}</h2>
        <h2>{data}</h2>
        
    </div>
  )
}

export default Spred