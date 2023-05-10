import React, { useEffect, useState } from 'react'

const CleanupFunc = () => {
    const [width,setWidth]=useState(window.screen.width)

    const actualWidth=()=>{

        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }
    useEffect( ()=>{
        window.addEventListener('resize',actualWidth)
        return()=>{
            window.removeEventListener('resize',actualWidth)
        }
    })
  return (
    <div>
        <h1>Clean Up Function</h1>
        <p className='paragraph'>Actual Size Window is </p>
        <h1>My Laptop Window Screen width is 1536 Pixel</h1>
        <h1>{width} Pixel</h1>


    </div>
  )
}

export default CleanupFunc