import React from "react";
// import { Link } from 'react-router-dom';
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "./navbar/Navbar";
import AuthNav from "./navbar/AuthNav";
import Logo from "../ui/Logo";
import Humburger from "../ui/Humburger";

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
  const [mobileNav, setMobileNav] = useState(false);
  console.log(mobileNav);

  return (
    <header className=" flex h-24 items-center  justify-between bg-zinc-300">
      <Logo />
      <Humburger mobileNav={mobileNav} setMobileNav={setMobileNav} />

      <Navbar mobileNav={mobileNav} />
      <AuthNav />
    </header>
  );
};

export default Header;

{
  /* <Dialog
        as="div"
        className=""
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">E_Clinic</span>
              <img className="h-8 w-auto" src="/Logo.png" alt="Logo" />
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
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Subscribe
                </a>
              </div> */
}
//       </div>
//     </div>
//   </Dialog.Panel>
// </Dialog> */}
