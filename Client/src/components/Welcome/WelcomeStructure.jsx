import React from 'react'
import UpperWelcome from './UpperWelcome.jsx'
import WelcomeText from './WelcomeText.jsx'
import WelcomeButtons from './WelcomeButtons.jsx'
import { Link } from 'react-router-dom'

const WelcomeStructure = () => {
  return (
    <>
        <div className='bg-white h-screen w-full sm:h-screen sm:w-full lg:h-2/3 lg:w-1/2 flex flex-col items-center justify-start'>
            <UpperWelcome/>
            <WelcomeText/>
            <WelcomeButtons/>
            <p className="text-xs text-gray-500">Already a Customer? <Link to='/login' className="text-[#e8691a]">Log In</Link></p>
        </div>
    </>
  )
}

export default WelcomeStructure