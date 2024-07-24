"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="bg-[rgb(147,179,206)] text-white pl-2 py-4  lg:flex flex-row gap-2 items-center hidden">
        Give us a call ! <IoCall /> 9826954459 | deepshikshasamiti@gmail.com
      </div>

      <div className="">
        <nav className="flex flex-col lg:flex-row justify-between items-center   w-[80%] mx-auto  ">
          <div className="flex items-center  md:gap-5 -ml-[45%] lg:ml-0">
            <img src="./logo1.png" alt="Logo" className="w-28 " />
            <div className="flex flex-col text-center">
              <h1 className="text-sm md:text-2xl font-bold ">
                Deep Convent School
              </h1>
              <p className="hidden md:block">Believe in the best</p>
            </div>
          </div>
          <div className="ml-[95%] absolute m-11">
            {show ? (
              <button onClick={() => setShow(!show)}>
                <MdCancel className="text-3xl lg:hidden" />
              </button>
            ) : (
              <button onClick={() => setShow(!show)}>
                <FiAlignJustify className="text-3xl  lg:hidden " />
              </button>
            )}
          </div>

          <div className=" hidden lg:flex gap-4 uppercase ">
            <Link
              href="/"
              className="no-underline text-black hover:bg-[rgb(147,179,206)] py-2 px-1"
            >
              Home
            </Link>

            <Link href="/" className=" no-underline group relative">
              <p className=" text-black hover:bg-[rgb(147,179,206)] py-2 px-1 group">
                <span>About us</span>
              </p>
              <div className=" z-50 transition duration-1000 hidden absolute top-10 w-44 p-2  bg-[rgb(147,179,206)] group-hover:flex  flex-col">
                <Link href="/About" className="no-underline text-white py-1">
                  About school
                </Link>
                <Link href="/Director" className="no-underline text-white py-1">
                  Director Desk
                </Link>
                <Link
                  href="/Principal"
                  className="no-underline text-white py-1"
                >
                  Principal desk
                </Link>
                <Link href="/Ouraim" className="no-underline text-white py-1">
                  our aim
                </Link>
              </div>
            </Link>
            <Link href="/" className=" no-underline relative group">
              <p className=" text-black hover:bg-[rgb(147,179,206)] py-2 px-1 group">
                <span>Academics</span>
              </p>
              <div className=" z-50 hidden transition duration-1000 absolute top-10 p-2  w-48 bg-[rgb(147,179,206)] group-hover:flex  flex-col">
                <Link
                  href="/Admissionprocedure"
                  className="no-underline text-white mb-1"
                >
                  Admission procedure
                </Link>
                <Link
                  href="/Uniformdetails"
                  className="no-underline text-white mb-1"
                >
                  uniform details
                </Link>
                <Link
                  href="/LatestUpdate"
                  className="no-underline text-white mb-1"
                >
                  latest update
                </Link>
              </div>
            </Link>

            <Link
              href="/Gallery"
              className="no-underline text-black hover:bg-[rgb(147,179,206)] py-2 px-1"
            >
              Gallery
            </Link>

            <Link
              href="/Facilities"
              className="no-underline text-black hover:bg-[rgb(147,179,206)] py-2 px-1"
            >
              facilities
            </Link>

            <Link
              href="/Contactus"
              className="no-underline text-black hover:bg-[rgb(147,179,206)] py-2 px-1"
            >
              Contact
            </Link>

            <Link
              href="/"
              className="no-underline text-black hover:bg-[rgb(147,179,206)] py-2 px-1"
            >
              <p className="bg-red-600 inline p-2 text-white rounded-lg">login</p>
            </Link>
          </div>
          {show ? (
            <div className="lg:hidden flex-col  w-full p-7 md:gap-10 uppercase">
              <Link href="/" className="text-black block mb-2 no-underline ">
                Home
              </Link>

              <Link href="/#" className=" no-underline group -mt-3 relative">
                <p className=" text-black   group">
                  <span>About us</span>
                </p>
                <div className=" z-50 transition duration-1000 hidden absolute top-5 w-44 p-2  bg-[rgb(147,179,206)] group-hover:flex  flex-col">
                  <Link href="/About" className="no-underline text-white py-1">
                    About school
                  </Link>
                  <Link
                    href="/Director"
                    className="no-underline text-white py-1"
                  >
                    Director Desk
                  </Link>
                  <Link
                    href="/Principal"
                    className="no-underline text-white py-1"
                  >
                    Principal desk
                  </Link>
                  <Link href="/Ouraim" className="no-underline text-white py-1">
                    our aim
                  </Link>
                </div>
              </Link>
              <Link href="/#" className=" no-underline relative -mt-3 group">
                <p className=" text-black  group">
                  <span>Academics</span>
                </p>
                <div className=" z-50 hidden transition duration-1000 absolute  top-5 bg-[rgb(147,179,206)] group-hover:flex p-2 flex-col">
                  <Link
                    href="/Admissionprocedure"
                    className="no-underline text-white mb-1"
                  >
                    Admission procedure
                  </Link>
                  <Link
                    href="/Uniformdetails"
                    className="no-underline text-white mb-1"
                  >
                    uniform details
                  </Link>
                  <Link
                    href="/LatestUpdate"
                    className="no-underline text-white mb-1"
                  >
                    latest update
                  </Link>
                </div>
              </Link>

              <Link
                href="/Gallery"
                className="text-black block mb-2 no-underline"
              >
                Gallery
              </Link>

              <Link
                href="/Facilities"
                className="text-black block mb-2 no-underline"
              >
                facilities
              </Link>

              <Link
                href="/Contactus"
                className="text-black block mb-2 no-underline"
              >
                Contact
              </Link>

              <Link href="/" className="text-black block mb-2 no-underline">
                <p className="bg-red-600 inline p-2 text-white rounded-lg">login</p>
              </Link>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  );
};

export default Header;
