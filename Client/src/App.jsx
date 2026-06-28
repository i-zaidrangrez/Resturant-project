import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import OpenRoutes from './components/OpenRoutes.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<OpenRoutes><Welcome/></OpenRoutes>}/>
        <Route path='/register' element={<OpenRoutes><Register/></OpenRoutes>}/>
        <Route path='/login' element={
          <OpenRoutes><Login/></OpenRoutes>}/>
        <Route path='/home' element={
          <ProtectedRoutes>
            <Home/>
          </ProtectedRoutes>
          }/>
      </Routes>
    </div>
  )
}

export default App