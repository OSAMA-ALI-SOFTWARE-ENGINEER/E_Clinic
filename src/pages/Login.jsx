import React, { useEffect, useRef, useState } from "react";
import Image from "../assets/images/image.png";
import Logo from "../assets/images/Logo.png";
import GoogleSvg from "../assets/images/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef();

  function handleShowPass() {
    setShowPassword(false);
    if (ref.current.type) return (ref.current.type = "text");
  }
  function handleHiddenPass() {
    setShowPassword(true);
    if (ref.current.type) return (ref.current.type = "password");
  }

  return (
    <div className=" grid grid-cols-[25rem_1fr] gap-x-10 p-4">
      {/* image */}
      <div>
        <p>image</p>
      </div>

      {/* content */}

      <div className="  p-12 max-w-[80%]  ">
        <form action="" className="flex p-4 mb-6 flex-col gap-4 shadow-xl">
          <div>
            <p>logo</p>

            <p>welcome</p>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className=" grow" placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              ref={ref}
              type="password"
              className="grow"
              value="password"
            />
            {showPassword ? (
              <FaEyeSlash onClick={handleShowPass} />
            ) : (
              <FaEye onClick={handleHiddenPass} />
            )}
          </label>

          <button>login</button>
        </form>

        <div className=" flex justify-between">
          <div className=" flex gap-2">
            <p>Have no account?</p>
            <Link
            className=" underline text-sky-500 hover:no-underline" 
            to={"/"}>sign up</Link>
          </div>

          <Link className=" underline text-sky-500 hover:no-underline" to={"/"}>forgot password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
