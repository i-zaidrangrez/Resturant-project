import React from "react";
import Logo from "../components/common/Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock, FaPhone, FaUser } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(
      register({
        name,
        email,
        password,
        phone,
      }),
    ).unwrap();
    navigate("/home");
    console.log(email, password);
    console.log(result);
  };
  return (
    <div className="h-screen flex items-center justify-center w-full bg-[url(https://i.pinimg.com/1200x/e9/28/72/e92872fcfde7e1a0541f1f5835a4cb38.jpg)] object-cover">
      <div className=" h-full w-full lg:h-9/10 lg:w-3/6 md:h-9/10 md:w-4/6 bg-white rounded-tr-[40%] rounded-tl-[40%] md:rounded-tr-2xl md:rounded-tl-2xl">
        <div className="flex items-center justify-center h-1/6 w-full">
          <Logo />
        </div>
        <div className="h-1/30 w-full flex flex-col items-center justify-start">
          <h1 className="text-gray-600 h-1/2 text-xs">
            Join BiteBase to Discover The Best Food
          </h1>
        </div>
        <div className="h-2/3 flex flex-col items-center justify-center py-5">
          <form
            className="h-full w-full flex flex-col items-center justify-center gap-2"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className=" w-9/10 flex items-center justify-center place-content-center border rounded-md">
              <h2 className="w-7/100 text-[#e8691a] text-xl flex items-center justify-center">
                <FaUser />
              </h2>
              <input
                onChange={(e) => {
                  handleNameChange(e);
                }}
                value={name}
                className="w-93/100 p-2 outline-0"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className=" w-9/10 flex items-center justify-center place-content-center border rounded-md">
              <h2 className="w-7/100 text-[#e8691a] text-xl flex items-center justify-center">
                <MdEmail />
              </h2>
              <input
                onChange={(e) => {
                  handleEmailChange(e);
                }}
                value={email}
                className="w-93/100  p-2 outline-0"
                type="email"
                placeholder="Enter Email"
              />
            </div>
            <div className=" w-9/10 flex items-center justify-center place-content-center border rounded-md">
              <h2 className="w-7/100 text-[#e8691a] text-xl flex items-center justify-center">
                <FaLock />
              </h2>
              <input
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
                value={password}
                className="w-93/100  p-2 outline-0"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className=" w-9/10 flex items-center justify-center place-content-center border rounded-md">
              <h2 className="w-7/100 text-[#e8691a] text-xl flex items-center justify-center">
                <FaPhone />
              </h2>
              <input
                onChange={(e) => {
                  handlePhoneChange(e);
                }}
                value={phone}
                className="w-93/100  p-2 outline-0"
                type="tel"
                placeholder="Enter Phone no."
              />
            </div>


            <p className="text-xs text-gray-500">
              Already a Customer?{" "}
              <Link to="/login" className="text-[#e8691a]">
                Log In
              </Link>
            </p>
            <button className="bg-[#e8691a] h-15/100 w-9/10 rounded-md outline-0 my-2 cursor-pointer active:bg-red-600 hover:bg-[#ff9e61]">
              {auth.loading ? "Registering" : "Register"}
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

export default Register;
