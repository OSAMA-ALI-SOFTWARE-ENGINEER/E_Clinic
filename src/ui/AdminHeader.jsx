import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogOut } from "../components/auth/useLogout";

const AdminHeader = () => {
  const navigate = useNavigate();
  const { logout, isOuting } = useLogOut();

  function handleLogout() {
    logout();
  }

  if (isOuting) return <p>loading...</p>;

  return (
    <header className="shadow-shadowTwo navbar sticky top-0 z-20 mb-6 bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to={"/"}>visit website</Link>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex max-m-[70%] h-16 p-2 ml-2">
          <img src="/Logo.png" alt="logo" />
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI☻</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 capitalize">
          <li className=" rounded-md bg-gray-200">
            <Link to={"/dashboard"}>View Dashboard</Link>
          </li>
          <li className=" rounded-md bg-gray-200">
            <Link to={"/add-disease"}>Add disease</Link>
          </li>
          <li className=" rounded-md bg-gray-200">
            <Link to={"/dashboard/subscribers"}>our subscribers list</Link>
          </li>
          <li className=" rounded-md bg-gray-200">
            <Link to={"/"}>visit website</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          disabled={isOuting}
          onClick={handleLogout}
          className=" rounded-md border border-none bg-red-600 px-6 py-1.5 font-medium capitalize text-cyan-100 outline-none transition-all duration-300 hover:shadow-xl active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
