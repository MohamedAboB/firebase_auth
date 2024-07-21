import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Welcome from './Welcome';
const Rout = () => {
  return (
    <div>
      <Routes>
      <Route path="/signup" element={<Signup />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/login" element={<Login />} /> {/* Assuming you have a Login component */}
                <Route path="/" element={<Signup />} /> {/* Redirect to Signup or another default page */}
      </Routes>
    </div>
  )
}

export default Rout
