import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Conatct = () => {
  return (
    <div>
        <h1>Conatct page</h1>
        <Link to = 'company'> Company </Link>
        <Link to = 'channel'> Channel </Link>
        <Outlet/>
    </div>
  )
}

export default Conatct