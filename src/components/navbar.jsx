import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import "@/styles/globals.css";

function Navbar() {
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
      // if (window.scrollY > 1) {
      //   setIsMenuOpen(false);
      // }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`px-10 py-4 ${headerFixed ? "header-fixed" : ""}`}>
      <div className="navbar container-fluid ">
        <div className="flex justify-between items-center">
          <div className="po_logo">
            <Link href="/">
              <img src="images/Logo.svg" alt="pysquad_logo" />
            </Link>
          </div>

          <nav className="flex">
            <Link
              href="/"
              className="px-3 mx-2 font-medium hover:text-primary "
            >
              Home
            </Link>
            <Link
              href="/services"
              className="px-3 mx-2 font-medium hover:text-primary "
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="px-3 mx-2 font-medium hover:text-primary "
            >
              Industries
            </Link>
            <Link
              href="/contactUs"
              className="px-3 mx-2 font-medium hover:text-primary "
            >
              Contact Us
            </Link>
          </nav>

          <div className="po_book_call">
            <button className="font-regular flex gap-2 items-center py-2 px-2 rounded-full text-white bg-primary ">
              <span className="ms-2">Book A Call</span>
              <span className="bg-white rounded-full p-2 ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.77982 2.11753C6.50984 1.44258 5.85616 1 5.12923 1H2.68417C1.75403 1 1 1.75386 1 2.68403C1 10.5904 7.40942 17 15.3156 17C16.2457 17 16.9996 16.2459 16.9996 15.3157L17 12.8702C17 12.1433 16.5575 11.4897 15.8826 11.2197L13.5392 10.2826C12.9329 10.0401 12.2426 10.1493 11.741 10.5673L11.1362 11.0717C10.4299 11.6604 9.39057 11.6135 8.74042 10.9634L7.03738 9.25872C6.38723 8.60856 6.33918 7.57008 6.9278 6.86372L7.43213 6.25894C7.85015 5.7573 7.96026 5.06681 7.71775 4.46053L6.77982 2.11753Z"
                    stroke="#111827"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
