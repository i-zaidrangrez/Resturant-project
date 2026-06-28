import React from "react";
import Logo from "../components/common/Logo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const result  = await dispatch(
      login({
        email,
        password,
      }),
    );
    console.log(email, password);
    console.log(result.payload.message)
  };

  return (
    <div className="h-screen flex items-center justify-center w-full bg-[url(https://i.pinimg.com/1200x/e9/28/72/e92872fcfde7e1a0541f1f5835a4cb38.jpg)] object-cover">
      <div className=" h-full w-full lg:h-9/10 lg:w-3/6 md:h-9/10 md:w-4/6 bg-white backdrop-blur-sm rounded-2xl">
        <div className="flex items-center justify-center h-1/6 w-full">
          <Logo />
        </div>
        <div className="h-1/30 w-full flex flex-col items-center justify-start">
          <h1 className="text-gray-600 h-1/2 text-xs">
            Welcome Back to BiteBase
          </h1>
        </div>
        <div className="h-2/3 flex flex-col items-center justify-center py-5">
          <form
            className="h-full w-full flex flex-col items-center justify-center gap-2"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              onChange={(e) => {
                handleEmailChange(e);
              }}
              className="border border-gray-400 w-9/10 rounded-md p-2 outline-0"
              type="email"
              placeholder="Email Address"
              value={email}
            />

            <input
              onChange={(e) => {
                handlePasswordChange(e);
              }}
              className="border border-gray-400 w-9/10 rounded-md p-2 outline-0"
              type="password"
              placeholder="Enter Password"
              value={password}
            />
            <p className="text-xs text-gray-500">
              New Customer? <span className="text-[#e8691a]">Sign Up</span>
            </p>
            <button className="bg-[#e8691a] h-15/100 w-9/10 rounded-md outline-0 my-2 cursor-pointer active:bg-red-600 hover:bg-[#ff9e61]">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
