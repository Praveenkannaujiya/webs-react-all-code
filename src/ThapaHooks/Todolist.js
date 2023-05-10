import React, { useState } from 'react'

const Todolist = () => {
  const biodata =[
    {
      id:0, name:'LOVER', age: 16
    },
    {
      id:1, name:'Shailja', age: 17
    },
    {
      id:2, name:'Lovely', age: 25
    }
  ]
  const [clear,setClear]=useState(biodata)
  const clearArray=()=>{
   setClear([])
  }
 
  const remove=(id)=>{
    const newuser=clear.filter((userdata)=>{
        return userdata.id !=id
    })
    setClear(newuser)
  }

  return (
    <div>
        <h1>ToDo List</h1>
        {
          clear.map((userdata)=>{
         return ( 
             <h1 className='h1style' key={userdata.id}>My Name is : {userdata.name}
              and My age : {userdata.age}
              <button className='btn1' onClick={()=>remove(userdata.id)}>remove</button>
               </h1>
              
         )  
        })
        }
        <button className='btn' onClick={clearArray}>Clear</button>
<p>--------------------------------------------------------------------------------------------------------------------------</p>
    </div>
  )
}

export default Todolist