import React, { useState } from 'react'

const Shortcircitevalu=()=>{
    const [demo,setDemo]=useState("")
 return(
    <div>
        <h1>Short Circuit Evaluation</h1>
        <h2>{ demo || 'Amay Kajal Rana' }</h2>  {/* short Circuit Evaluation me AND OR operator ka use hota hai */}
         <h2>{ demo && 'Kajal Rana' }</h2>     {/* and operator m agar dono true hoga to right side data show krega  */}      

    </div>
 )
}
export default Shortcircitevalu