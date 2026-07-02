import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaUserPlus } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { session } from '../../redux/guestSlice.js';

const WelcomeButtons = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const guest = useSelector((state) => state.guest)

  const handleSession = async()=>{
    try {
      const res = await dispatch(session({deviceId : "6275",qrSlug : "cb7feb3f1ec2"})).unwrap()
      console.log(res)
      if(res){
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
        <div className='h-4/10 sm:h-4/10 w-full flex flex-col items-center justify-center gap-2'>
                <h1 onClick={()=>{navigate('/register')}} className='h-3/10 flex items-center w-2/3 border rounded-2xl text-[3vh] gap-2 hover:bg-[#e8691a] cursor-pointer duration-300 border-[#e8691a] justify-center'><FaUserPlus />Register</h1>
                <h1 onClick={()=>{navigate('/login')}} className='h-3/10 flex items-center w-2/3 border rounded-2xl text-[3vh] gap-2 hover:bg-[#e8691a] cursor-pointer duration-300 border-[#e8691a] justify-center'><IoLogIn />Login</h1>
                <h1 onClick={handleSession} className='h-3/10 flex items-center w-2/3 border rounded-2xl hover:bg-[#e8691a] cursor-pointer gap-2 text-[3vh] duration-300 border-[#e8691a] justify-center'><FaUser />{guest.loading ? "Working..." : "Guest"}</h1>
            </div>
    </>

  )
}

export default WelcomeButtons