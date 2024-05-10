import React, { useEffect, useRef, useState } from "react";

import Logo from "/Logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../components/auth/useLogin";
import { useCurrentUser } from "../components/auth/useCurrentUser";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("azazkhan");

  const { isLoading, isAuthenticated } = useCurrentUser();
  const { login, isLogging } = useLogin();

  const ref = useRef();

  function handleShowPass() {
    setShowPassword(false);
    if (ref.current.type) return (ref.current.type = "password");
  }
  function handleHiddenPass() {
    setShowPassword(true);
    if (ref.current.type) return (ref.current.type = "text");
  }

  function handleLogin(e) {
    e.preventDefault();
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate("/dashboard", { replace: true });
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) navigate("/dashboard");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <p>loading...</p>;

  if (!isAuthenticated)
    return (
      <div className=" ml-28 mr-3 grid grid-cols-[35rem_1fr] gap-x-14 ">
        {/*Left Side Cover image */}
        <div className="my-24 w-[650px]">
          <img src={"./Cover.png"} alt="allergies" className="" />
        </div>

        {/* content */}

        <div className="  max-w-[80%] p-12">
          <form
            onSubmit={handleLogin}
            className="mb-8 mt-12 flex flex-col gap-4 bg-base-200 p-4 shadow-xl"
          >
            <div className="flex flex-col">
              <img src={Logo} alt="logo" className=" self-center" />

              <p className="self-center text-xl font-bold">
                welcome to Admin Login
              </p>
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
              <input
                type="email"
                className=" grow"
                placeholder="Email"
                value={email}
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
                ref={ref}
                type="password"
                placeholder="******"
                className="grow"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash onClick={handleShowPass} />
              ) : (
                <FaEye onClick={handleHiddenPass} />
              )}
            </label>

            <button
              disabled={isLogging}
              className="btn bg-cyan-300 uppercase sm:btn-sm md:btn-md hover:bg-cyan-900  hover:text-white"
            >
              login
            </button>
          </form>

          <div className=" flex justify-between">
            <div className=" flex gap-2">
              <p>Have no account?</p>
              <Link
                className=" text-sky-500 underline hover:no-underline"
                to={"/signup"}
              >
                sign up
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
    );
};

export default Login;
