import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App