import Link from "next/link";
import React from "react";
import "@/styles/globals.css";

function Header() {
  return (
    <header>
      <div className="container-fluid px-10 py-4">
        <div className="row justify-between">
          <div className="po_logo">
            <Link href="">
              <img src="images/Logo.svg" alt="pysquad_logo" />
            </Link>
          </div>

          <nav className="flex">
            <Link className="px-3 mx-2 font-medium hover:text-primary " href="">
              Home
            </Link>
            <Link className="px-3 mx-2 font-medium hover:text-primary " href="">
              Services
            </Link>
            <Link className="px-3 mx-2 font-medium hover:text-primary " href="">
              Industries
            </Link>
            <Link className="px-3 mx-2 font-medium hover:text-primary " href="">
              Contact Us
            </Link>
          </nav>

          <div className="po_book_call">
            <button className="font-medium py-2 px-3 rounded-full text-white bg-primary ">
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
