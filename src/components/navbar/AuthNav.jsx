import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../auth/useCurrentUser";
import { useLogOut } from "../auth/useLogout";

const AuthNav = () => {
  const { isAuthenticated, isLoading } = useCurrentUser();
  const { logout, isOuting } = useLogOut();

  if (isLoading)
    return (
      <div className=" ml-0 flex gap-2 pr-2 sm:ml-auto">
        <div className="h-10 w-24 animate-pulse rounded-md bg-gray-100"></div>
      </div>
    );
  return (
    <div className=" order-2 ml-auto pr-4  md:order-none ">
      {isAuthenticated && !isLoading ? (
        <button
          disabled={isOuting}
          onClick={logout}
          className=" rounded-md border border-none bg-red-600 px-6 py-1.5 font-medium capitalize text-cyan-100 outline-none transition-all duration-300 hover:shadow-xl active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          logout
        </button>
      ) : (
        <Link
          className=" rounded-md border border-none bg-cyan-500 px-6 py-1.5 font-medium outline-none transition-all duration-200 hover:bg-sky-800 hover:text-white hover:shadow-lg active:scale-90"
          to={"/login"}
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthNav;
