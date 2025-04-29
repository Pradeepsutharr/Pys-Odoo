import Link from "next/link";
import React, { useState, useEffect } from "react";
import "@/styles/globals.css";

function Navbar() {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHeaderFixed(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex justify-between items-center px-10 py-4 mx-auto container-fluid ${
          headerFixed ? "header-fixed" : ""
        }`}
      >
        <div className="po_logo">
          <Link href="/">
            <img src="/images/Logo.svg" alt="pysquad_logo" />
          </Link>
        </div>

        <nav className="flex gap-6">
          <Link href="/" className="font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="font-medium hover:text-primary">
            Services
          </Link>
          <Link href="/industries" className="font-medium hover:text-primary">
            Industries
          </Link>
          <Link href="/contactUs" className="font-medium hover:text-primary">
            Contact Us
          </Link>
        </nav>

        <div className="po_book_call">
          <button className="flex items-center justify-between gap-2 py-2 pe-2 ps-4 rounded-full text-white bg-primary">
            <span>Book A Call</span>
            <span className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  d="M6.77982 2.11753C6.50984 1.44258 5.85616 1 5.12923 1H2.68417C1.75403 1 1 1.75386 1 2.68403C1 10.5904 7.40942 17 15.3156 17C16.2457 17 16.9996 16.2459 16.9996 15.3157L17 12.8702C17 12.1433 16.5575 11.4897 15.8826 11.2197L13.5392 10.2826C12.9329 10.0401 12.2426 10.1493 11.741 10.5673L11.1362 11.0717C10.4299 11.6604 9.39057 11.6135 8.74042 10.9634L7.03738 9.25872C6.38723 8.60856 6.33918 7.57008 6.9278 6.86372L7.43213 6.25894C7.85015 5.7573 7.96026 5.06681 7.71775 4.46053L6.77982 2.11753Z"
                  stroke="#111827"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`flex justify-between items-center lg:hidden px-3 py-4 mx-auto ${
          headerFixed ? "header-fixed" : ""
        }`}
      >
        <div className="po_logo">
          <Link href="/">
            <img src="/images/Logo.svg" alt="pysquad_logo" />
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="focus:outline-none"
        >
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full shadow-lg p-6 z-50 bg-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex">
          <div className="po_logo" onClick={() => setIsMenuOpen(false)}>
            <Link href="/">
              <img src="/images/Logo.svg" alt="pysquad_logo" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="font-medium"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="font-medium"
          >
            Services
          </Link>
          <Link
            href="/industries"
            onClick={() => setIsMenuOpen(false)}
            className="font-medium"
          >
            Industries
          </Link>
          <Link
            href="/contactUs"
            onClick={() => setIsMenuOpen(false)}
            className="font-medium"
          >
            Contact Us
          </Link>

          <div className="mt-8">
            <div className="text-sm font-semibold">Contact Us</div>
            <div className="text-sm mt-2 flex">
              <span>📍</span>
              <address>
                A 605, Shilp Aaron, Sindhubhavan Road, Ahmedabad
              </address>
            </div>
            <div className="text-sm mt-2 flex">
              <span>📧</span>
              <p>
                <a href="mailto:solutions@pysquad.com">solutions@pysquad</a>
              </p>
            </div>
            <div className="text-sm mt-2 flex">
              <span>📞</span> <phone>+91 9898295005</phone>{" "}
            </div>
          </div>

          <button className="font-medium py-2 px-4 bg-primary text-white rounded-full mt-4">
            Book A Call
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
    </header>
  );
}

export default Navbar;
