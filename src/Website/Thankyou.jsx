import React from 'react'

const Thankyou = (props) => {
    return (
        <div>
            <p>Hello Dear <strong>{props.name}</strong>  thanks for submit form.</p>
            <button onClick={() => props.goback(true)}>OK</button>
        </div>
    )
}

export default Thankyou