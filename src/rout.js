import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default Rout
