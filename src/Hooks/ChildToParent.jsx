import React from 'react'

const ChildToParent = (props) => {
    const name="Praveen Deny"
  return (
    <div>
        <h1>Child To Parent Data send</h1>
        <button onClick={()=>props.data(name)}>Alert </button>
    </div>
  )
}

export default ChildToParent