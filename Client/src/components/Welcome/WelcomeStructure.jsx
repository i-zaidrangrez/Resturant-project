import React from 'react'
import UpperWelcome from './UpperWelcome.jsx'
import WelcomeText from './WelcomeText.jsx'
import WelcomeButtons from './WelcomeButtons.jsx'
import { Link } from 'react-router-dom'

const WelcomeStructure = () => {
  return (
    <>
        <div className='bg-white h-screen w-full sm:h-screen sm:w-full md:h-2/3 md:w-1/2 lg:h-2/3 lg:w-1/2 flex flex-col items-center justify-start rounded-tr-[40%] rounded-tl-[40%] md:rounded-tr-2xl md:rounded-tl-2xl'>
            <UpperWelcome/>
            <WelcomeText/>
            <WelcomeButtons/>
        </div>
    </>
  )
}

export default WelcomeStructure