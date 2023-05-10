import React from 'react'

const MapFunction = () => {
    const student=['ajay','nagar','ankit','kannaujiya','deny']
    // student.map((item)=>{
    //     console.log('item', item)

    // })
  return (
    <div>
        <h1>MapFunction</h1>
       
       {
        student.map((item)=>
            <h1>{item}</h1>
        )
       } 
    </div>
  )
}

export default MapFunction