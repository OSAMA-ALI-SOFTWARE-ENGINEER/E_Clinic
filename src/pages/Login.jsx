import React, { useEffect, useState } from "react";
import Image from "../assets/images/image.png";
import Logo from "../assets/images/Logo.png";
import GoogleSvg from "../assets/images/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
    const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="flex ">
      <div className="grow h-screen bg-stone-300 flex justify-center items-center">
        <img className="w-48 justify-center" src={Image} alt="" />
      </div>
      <div className="h-screen flex grow">
        <div className="h-full w-4/5 mt-0 mb-0 ml-auto mr-auto flex justify-center items-center">
          <div className="self-center pt-12">
            <img src={Logo} alt="" />
          </div>
          <div className="my-auto mx-0">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form className="flex flex-col">
              <input type="email" placeholder="Email" />
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="text-[1.3rem] font-medium cursor-pointer mt-2">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="no-underline text-xl">
                  Forgot password?
                </a>
              </div>
              <div className="flex flex-col gap-y-3 mt-10">
                <button type="button">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login