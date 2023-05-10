import React, { useState } from 'react'

const Loginpage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allentry, setAllEntry] = useState([])

    const submitform = (e) => {
        e.preventDefault()
        const newentry = {email: email, password: password }
        setAllEntry([ newentry]);
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <h1>Loginpage</h1>
            <form action="" onSubmit={submitform}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn' >Submit </button>

            </form>
            <div>
                {
                    allentry.map((item) => {
                        return(
                            <div className='item'>
                            <p>{item.email} <span>.........</span>  {item.password}</p>
                           

                        </div>
                        )
                    })
                }
            </div>
           
        </>
    )
}

export default Loginpage