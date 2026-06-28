import React from "react";
import Logo from "../components/common/Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state)=>state.auth)
  const handleNameChange = (e)=>{
    setName(e.target.value)
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }
  const handlePhoneChange = (e)=>{
    setPhone(e.target.value)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const result = await dispatch(register(
      {
        name,
        email,
        password,
        phone
      }
    )).unwrap();
    navigate('/home')
    console.log(email, password);
    console.log(result)
  }
  return (
    <div className="h-screen flex items-center justify-center w-full bg-[url(https://i.pinimg.com/1200x/e9/28/72/e92872fcfde7e1a0541f1f5835a4cb38.jpg)] object-cover">
      <div className=" h-full w-full lg:h-9/10 lg:w-3/6 md:h-9/10 md:w-4/6 bg-white backdrop-blur-sm rounded-2xl">
        <div className="flex items-center justify-center h-1/6 w-full">
          <Logo />
        </div>
        <div className="h-1/30 w-full flex flex-col items-center justify-start">
          <h1 className="text-gray-600 h-1/2 text-xs">
            Join BiteBase to Discover The Best Food
          </h1>
        </div>
        <div className="h-2/3 flex flex-col items-center justify-center py-5">
          <form className="h-full w-full flex flex-col items-center justify-center gap-2" onSubmit={(e)=>{handleSubmit(e)}}>
            <input
              onChange = {(e)=>{handleNameChange(e)}}
              value={name}
              className="border border-gray-400 w-9/10 rounded-md p-2 outline-0"
              type="text"
              placeholder="Your Name"
            />

            <input
              onChange = {(e)=>{handleEmailChange(e)}}
              value={email}
              className="border border-gray-400 w-9/10 rounded-md p-2 outline-0"
              type="email"
              placeholder="Email Address"
            />

            <input
              onChange = {(e)=>{handlePasswordChange(e)}}
              value={password}
              className="border border-gray-400 w-9/10 rounded-md p-2 outline-0"
              type="password"
              placeholder="Enter Password"
            />

            <input
              onChange = {(e)=>{handlePhoneChange(e)}}
              value={phone}
              className="border border-gray-400 w-9/10 rounded-md p-2 outline-0"
              type="phone"
              placeholder="Mobile No."
            />
            <p className="text-xs text-gray-500">Already a Customer? <span className="text-[#e8691a]">Log In</span></p>
            <button className="bg-[#e8691a] h-15/100 w-9/10 rounded-md outline-0 my-2 cursor-pointer active:bg-red-600 hover:bg-[#ff9e61]">{auth.loading? "Registering" : "Register"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
