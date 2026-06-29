import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomeButtons = () => {

    const navigate = useNavigate()
  return (
    <>
        <div className='h-4/10 sm:h-4/10 w-full flex flex-col items-center justify-center gap-2'>
                <h1 onClick={()=>{navigate('/register')}} className='h-1/5 flex items-center w-2/3 border rounded-2xl text-[3vh] hover:bg-[#e8691a] cursor-pointer duration-300 border-[#e8691a] justify-center'>Register</h1>
                <h1 className='h-1/5 flex items-center w-2/3 border rounded-2xl hover:bg-[#e8691a] cursor-pointer text-[3vh] duration-300 border-[#e8691a] justify-center'>Guest</h1>
            </div>
    </>

  )
}

export default WelcomeButtons