import Link from "next/link";
import React from "react";
import "@/styles/globals.css";

function Navbar() {
  return (
      <div className="navbar container-fluid px-10 py-4">
        <div className="flex justify-between items-center">
          <div className="po_logo">
            <Link href="/">
              <img src="images/Logo.svg" alt="pysquad_logo" />
            </Link>
          </div>

          <nav className="flex">
            <Link href="" className="px-3 mx-2 font-medium hover:text-primary " >
              Home
            </Link>
            <Link href="" className="px-3 mx-2 font-medium hover:text-primary " >
              Services
            </Link>
            <Link href="" className="px-3 mx-2 font-medium hover:text-primary " >
              Industries
            </Link>
            <Link href="" className="px-3 mx-2 font-medium hover:text-primary " >
              Contact Us
            </Link>
          </nav>

          <div className="po_book_call">
            <button className="font-medium animate-bounce py-2 px-3 rounded-full text-white bg-primary ">
              Book A Call
            </button>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
