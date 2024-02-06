import React from "react";
import { NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <nav className="flex px-4 border-b md:shadow-lg items-center relative">
      <div className="md:py-0 py-3">
  <img
    src="./logo_PE.png"
    alt="Pharma Logo"
    className="text-lg font-bold"
    style={{ width: '25%' }}
  />
</div>


      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <li className="group">
          <a
            href="#"
            className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span>Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li>
              <NavLink to={"UserLogin"} className="block px-4 py-2 text-sm">
                Customer
              </NavLink>
            </li>
            <li>
              <NavLink to={"/VendorLogin"} className="block px-4 py-2 text-sm">
                Vendor
              </NavLink>
            </li>
            <li>
              <NavLink to={"/AdminLogin"} className="block px-4 py-2 text-sm">
                Admin
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="group">
          <a
            href="#"
            className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span>Register</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
            <li>
              <NavLink to={"/Register"} className="block px-4 py-2 text-sm">
                Customer
              </NavLink>
            </li>
            <li>
              <NavLink to={"/VendorRegister"} className="block px-4 py-2 text-sm">
                Vendor
              </NavLink>
            </li>
          </ul>
        </li>
        <NavLink to={"/help"}>
          <li>
            <a
              href="#"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Help</span>
            </a>
          </li>
        </NavLink>
      </ul>
      <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </svg>
      </div>
    </nav>
  );
}

export default MainNavbar;
