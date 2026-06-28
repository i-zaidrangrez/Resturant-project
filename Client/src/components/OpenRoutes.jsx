import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OpenRoutes = (props) => {
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('AccessToken')
    useEffect(() => {
  if (accessToken) {
    navigate('/home');
  }
}, [accessToken, navigate]);
  return (
    <div>
        {props.children}
    </div>
  )
}

export default OpenRoutes