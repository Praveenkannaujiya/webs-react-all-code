import React ,{useState}from 'react'
const UseState = () => {

const [myname, setMyname]=useState('useState')

    const nameHandler=()=>{
        let deny  =   myname;
        
      (deny=== 'useState') ? setMyname('aap ne button ko click kiya'): setMyname('useState')
       
    }
  return (
    <div>
        <h1>UseState Hooks Example</h1>
        <h2>{myname}</h2>
        <button className='btn' onClick={nameHandler}>Click Update</button>
    </div>
  )
}

export default UseState