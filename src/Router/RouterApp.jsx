import React from 'react'
import {BrowserRouter , Routes ,Route, Navigate} from 'react-router-dom'
import About from'./About'
import Home from './Home'
import Navbar from './Navbar'
import Conatct from './Conatct'
import Company from './Company'
import Channel from './Channel'
import PageError from './PageError'
const RouterApp = () => {
  return (
    <div>
<BrowserRouter>
<Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact/' element={<Conatct/>}>
              <Route path='company' element={<Company/>}/>
              <Route path='channel' element={<Channel/>}/>
              </Route>

            {/* <Route path='/*' element={<PageError/>}/> */}

            <Route path='/*' element={<Navigate to='/ '/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterApp