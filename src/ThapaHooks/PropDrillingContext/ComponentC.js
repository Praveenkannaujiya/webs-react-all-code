import React, { useContext } from 'react'
import { BioData } from './ComponentA'
const ComponentC = () => {
    const Developer = useContext(BioData)
  return (
    <div>
        <h1>Component C </h1>
        <h1>Hello Dear {Developer}</h1>
    </div>
  )
}

export default ComponentC