import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className=" flex flex-col items-center bg-gray-200">
      <div>
        <img className=" w-32" src="/Logo.png" alt="" />
      </div>

      <ul className=" menu menu-vertical space-y-4 capitalize">
        <li className=" rounded-md bg-gray-200">
          <Link to={"/dashboard"}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            <span>View Dashboard</span>
          </Link>
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
    </aside>
  );
};

export default Sidebar;
