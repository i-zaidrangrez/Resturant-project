import React from "react";
import Logo from "../components/common/Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("AccessToken");
  const auth = useSelector((state) => state.auth);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(
        login({
          email,
          password,
        }),
      ).unwrap();
      navigate("/home");
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center w-full bg-[url(https://i.pinimg.com/1200x/e9/28/72/e92872fcfde7e1a0541f1f5835a4cb38.jpg)] object-cover">
      <div className=" h-full w-full lg:h-9/10 lg:w-3/6 md:h-9/10 md:w-4/6 bg-white rounded-tr-[40%] rounded-tl-[40%] md:rounded-tr-2xl md:rounded-tl-2xl">
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
            <h1 className=" w-9/10 flex items-center justify-center place-content-center border rounded-md">
              <h1 className="w-7/100 text-[#e8691a] text-xl flex items-center justify-center">
                <MdEmail />
              </h1>
              <input
                onChange={(e) => {
                  handleEmailChange(e);
                }}
                value={email}
                className="w-93/100  p-2 outline-0"
                type="email"
                placeholder="Enter Email"
              />
            </h1>
            <h1 className=" w-9/10 flex items-center justify-center place-content-center border rounded-md">
              <h1 className="w-7/100 text-[#e8691a] text-xl flex items-center justify-center">
                <FaLock />
              </h1>
              <input
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
                value={password}
                className="w-93/100  p-2 outline-0"
                type="password"
                placeholder="Enter Password"
              />
            </h1>
            <p className="text-xs text-gray-500">
              New Customer?{" "}
              <Link
                to="/register"
                className="text-[#e8691a] hover:text-orange-400"
              >
                Sign Up
              </Link>
            </p>
            <button className="bg-[#e8691a] h-15/100 w-9/10 rounded-md outline-0 my-2 cursor-pointer active:bg-red-600 hover:bg-[#ff9e61]">
              {auth.loading ? "Logging In..." : "Log In"}
            </button>
          </form>
          {auth.error ? <p className="text-red-600 border bg-red-100 border-red-500 px-2 py-1">
            {auth.error ? auth.error : ""}
          </p> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
