import React, { useEffect, useRef, useState } from "react";
import Image from "/Cover.png";
import Logo from "/Logo.png";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCreateUser } from "../components/auth/useCreateUser";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const refPassword = useRef();
  const refPasswordConfirm = useRef();
  const { signUp, isCreating } = useCreateUser();

  function handlePassShow() {
    setShowPassword(false);
    if (refPassword.current.type) return (refPassword.current.type = "text");
  }
  function handlePassHidden() {
    setShowPassword(true);

    if (refPassword.current.type)
      return (refPassword.current.type = "password");
  }

  function handleConfirmPassShow() {
    setShowPasswordConfirm(false);

    if (refPasswordConfirm.current.type)
      return (refPasswordConfirm.current.type = "text");
  }
  function handleConfirmPassHidden() {
    setShowPasswordConfirm(true);

    if (refPasswordConfirm.current.type)
      return (refPasswordConfirm.current.type = "password");
  }

  function handleSignUp(e) {
    e.preventDefault();
    signUp({ name, email, password });
  }

  return (
    <>
      <div className=" ml-28 mr-3 grid grid-cols-[35rem_1fr] gap-x-14">
        {/*Left Side Cover image */}
        <div className="my-24 w-[650px]">
          <img src={Image} alt="allergies" className="min-h-screen" />
        </div>

        {/* content */}

        <div className="  max-w-[80%] p-12  ">
          <form
            onSubmit={handleSignUp}
            className="mb-8 mt-12 flex flex-col gap-4 bg-base-200 p-4 shadow-xl"
          >
            <div className="flex flex-col">
              <img src={Logo} alt="logo" className=" items-stretch" />

              <p className="captalize self-center text-xl font-bold">
                Welcome to SignUp
              </p>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="text"
                className=" grow"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
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
              <input
                type="email"
                className=" grow"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
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
                ref={refPassword}
                type="password"
                className="grow"
                placeholder="******"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash onClick={handlePassShow} />
              ) : (
                <FaEye onClick={handlePassHidden} />
              )}
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
                ref={refPasswordConfirm}
                type="password"
                placeholder="re-type password"
                className="grow"
                value={confirmPassword}
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showPasswordConfirm ? (
                <FaEyeSlash onClick={handleConfirmPassShow} />
              ) : (
                <FaEye onClick={handleConfirmPassHidden} />
              )}
            </label>

            <button
              disabled={isCreating}
              className="btn bg-cyan-300 uppercase sm:btn-sm md:btn-md hover:bg-cyan-900 hover:text-white"
            >
              signup
            </button>
          </form>

          <div className=" flex justify-between">
            <div className=" flex gap-2">
              <p>Have an account?</p>
              <Link
                className=" text-sky-500 underline hover:no-underline"
                to={"/login"}
              >
                login
              </Link>
            </div>

            <Link
              className=" text-sky-500 underline hover:no-underline"
              to={"/"}
            >
              forgot password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
