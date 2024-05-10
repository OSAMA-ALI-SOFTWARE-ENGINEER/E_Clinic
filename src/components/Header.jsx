import React from "react";
// import { Link } from 'react-router-dom';
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUser } from "./auth/useCurrentUser";
import { useLogOut } from "./auth/useLogout";

// import Logo from ""
const links = [
  { to: "/dashboard", name: "Dashboard" },
  { to: "/", name: "Home" },
  { to: "/disease", name: "Disease" },
  { to: "/treatment", name: "Treatment" },
  { to: "/about", name: "About" },
  { to: "/contact", name: "Contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isAuthenticated, isLoading } = useCurrentUser();
  const { logout, isOuting } = useLogOut();

  console.log(isAuthenticated);
  function handleLogout() {
    logout();
  }

  if (isLoading || isOuting) return <p>loading...</p>;
  return (
    <header className=" bg-zinc-300">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src={"../../public/Logo.png"} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
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
        <div className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          {/* <Link
            className=" rounded-sm bg-cyan-400 px-4 py-2 font-primary font-medium capitalize text-cyan-900 shadow-lg duration-200 hover:shadow-none active:scale-90"
            to={"/add-disease"}
          >
            Add new Disease
          </Link> */}
          {isAuthenticated && !isLoading ? (
            <button
              disabled={isOuting}
              onClick={handleLogout}
              className=" rounded-md border border-none bg-red-600 px-6 py-1.5 font-medium capitalize text-cyan-100 outline-none transition-all duration-300 hover:shadow-xl active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              logout
            </button>
          ) : (
            <Link
              className=" rounded-md border border-none bg-cyan-500 px-6 py-1.5 font-medium text-cyan-100 outline-none transition-all duration-200 hover:shadow-lg active:scale-90"
              to={"/login"}
            >
              Login
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((item) => (
                  <a
                    key={item.name}
                    href={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
