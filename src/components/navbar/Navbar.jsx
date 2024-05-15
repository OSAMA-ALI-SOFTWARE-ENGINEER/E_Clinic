import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogOut } from "../auth/useLogout";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useCurrentUser } from "../../components/auth/useCurrentUser";

const Navbar = ({ setMobileMenuOpen }) => {
  return (
    <nav
      className="ml-auto flex items-center justify-between gap-4 p-6 lg:px-8"
      aria-label="Global"
    >
      {/* <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div> */}
      <div className="hidden lg:flex lg:gap-x-12">
        <Link
          className="text-sm  font-semibold leading-6 text-gray-900"
          to={"/"}
        >
          home
        </Link>
        <Link
          className="text-sm  font-semibold leading-6 text-gray-900"
          to={"/disease"}
        >
          disease
        </Link>
        <Link
          className="text-sm  font-semibold leading-6 text-gray-900"
          to={"/treatment"}
        >
          treatment
        </Link>
        <Link
          className="text-sm  font-semibold leading-6 text-gray-900"
          to={"/about"}
        >
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
