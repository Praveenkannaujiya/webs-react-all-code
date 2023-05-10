import React, { useRef, useState } from 'react'

const Uncontrol = () => {
  const luckyName = useRef(null)     // it like a useState its preserv the value no rerender   
  const [show,setShow]=useState(false)
    const submitform=(e)=>{
                                        
        e.preventDefault()
        console.log(luckyName.current.value)
        const user = luckyName.current.value
        user===""? alert("plx fill the data") :setShow(true)
    }
  return (
    <div >
        <h1>Uncontrolled function</h1>
        <form action="" className='forml' onSubmit={submitform}>
            <div>
                <label htmlFor="LockyName">Enter Your Lucky Name</label>
                <input type="text" id='luckyName' ref={luckyName} />
            </div>
            <br />
            <button>Submit</button>
        </form>
        <h1>{show ? `Hello Dear ${luckyName.current.value} And  Welcome`: " "}</h1>
    </div>
  )
}

export default Uncontrol