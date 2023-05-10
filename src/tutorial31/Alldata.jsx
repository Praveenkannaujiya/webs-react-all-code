import React, { useState } from 'react'

const Alldata = () => {
    const [name,setName]=useState()
    const [fav,setFav]=useState()
    const [tnc,setTnc]=useState(true)

    const submitdata=(e)=>{
        e.preventDefault()
        console.log(name,fav,tnc)
    }
  
  return (
    <div>
        <h1>Alldata</h1>

        <form action="" onSubmit={submitdata}>

            <input type="text" onChange={(e)=>setName(e.target.value)} />

            <select onChange={(e)=>setFav(e.target.value)}>

                <option>Select option</option>
                <option>Avanger</option>
                <option>X man</option>
                <option>Dc</option>
            </select>

            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>accept all t and c </span>

            <button type='submit'> Submit</button>
        </form>

    </div>
  )
}

export default Alldata