import React, { useEffect, useState } from 'react'


const UseEffectcode = () => {
    const [count,setCount]=useState(0)
    const [counttwo,setCounttwo]=useState(10)


    useEffect(()=>{
        console.log("ComponenetDidMount")
    },[])                                  // [] sqour bracket se "ComponenetDidMount" ban jata hai ye first time run karega 



   
    useEffect(()=>{
        console.log("ComponenetDidUpdate")
    },[counttwo])                                  // [counttwo] sqour bracketke under state pr update krnw ko "ComponenetDidUpdate" ban jata hai ye counttwo  ki value update hone pr call hoga  

  return (
    <div className='formankit'>
        <h1>UseEffect</h1>
        <h2>Counter {count}</h2>
        <h3>counter Two {counttwo}</h3>
        <button onClick={()=>setCount(count+1)}>Counter btn</button>
        <button onClick={()=>setCounttwo(counttwo+1)}>Counter btn</button>

    </div>
  )
}

export default UseEffectcode