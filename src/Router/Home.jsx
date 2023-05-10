import React from 'react'
import {Link} from'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <p>Hello My Name is Praveen kannaujiya i am from India And welcome to my vlog</p>

        <Link to='/about'>Go about </Link>
    </div>
  )
}

export default Home