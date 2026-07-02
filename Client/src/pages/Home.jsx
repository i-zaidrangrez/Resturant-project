import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const auth = useSelector((state)=>state.auth)
  return (
    <div className='bg-red-500'>Homepage</div>
  )
}

export default Home