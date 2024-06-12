import React from "react";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-blue-500 border-gray-200 py-2.5 ">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl  mx-auto">
          
        <Link to={'/'}>


          <img
            src={logo}
            class="  -ml-20  w-48 h-24  rounded-xl"
            alt=""
          />
  
        </Link>
          
          <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block"></div>

            <a
              href=""
              class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
            >
              Admin Login
            </a>
          </div>
          <div
            class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col align-medium  text-lg lg:flex-row lg:space-x-5  lg:mt-0">
              <li>
                <Link
                  to={'/home'}
                  class="block py-2 px-3 text-black hover:text-white  "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/customer'}
                  class="block py-2 px-3 text-black  hover:text-white  "
                >
                  Customer Registration
                </Link>
              </li>
              <li>
                <Link
                  to={'/order'}
                  class="block py-2 px-3 text-black  hover:text-white black "
                >
                  Order
                </Link>
              </li>
              <li>
                <Link to={'/audience'} class="block py-2 px-3 text-black ">
                  Audience
                </Link>
              </li>
              <li>
                <Link to={'/campaign'} class="block py-2 px-3 text-black ">
                  Campaigns
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script> */}
    </div>
  );
};

export default Navbar;
