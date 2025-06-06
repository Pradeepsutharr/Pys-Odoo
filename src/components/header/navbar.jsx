import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Navbar() {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const route = useRouter();
  const path = route.pathname;

  useEffect(() => {
    function handleScroll() {
      setHeaderFixed(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {};
      document.head.appendChild(script);
    }
  }, []);

  const handleCalendlyPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/vh-pysquad/meeting-with-pysquad?hide_gdpr_banner=1",
    });
    return false;
  };

  return (
    <header className="relative z-10">
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex justify-between items-center px-10 py-4 mx-auto container-fluid ${
          headerFixed ? "header-fixed" : ""
        }`}
      >
        <div className="po_logo">
          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="pysquad_logo"
              width={150}
              height={30}
              style={{ width: 150, height: 30 }}
              priority
            />
          </Link>
        </div>

        <nav className="flex gap-6">
          <Link
            href="/"
            className={`font-medium hover:text-primary ${
              path === "/" ? "text-primary" : "text-heading"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`font-medium hover:text-primary ${
              path === "/services" || path === "/service-details"
                ? "text-primary"
                : "text-heading"
            }`}
          >
            Services
          </Link>
          <Link
            href="/industries"
            className={`font-medium hover:text-primary ${
              path === "/industries" ? "text-primary" : "text-heading"
            }`}
          >
            Industries
          </Link>
          <Link
            href="/contactUs"
            className={`font-medium hover:text-primary ${
              path === "/contactUs" ? "text-primary" : "text-heading"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="po_book_call">
          <button onClick={handleCalendlyPopup} className="pulse-button">
            Book A call
            <span></span>
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
            <Image
              src="/images/Logo.svg"
              alt="pysquad_logo"
              width={150}
              height={30}
              style={{ width: 150, height: 30 }}
              priority
            />
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

      <div
        className={`fixed top-0 right-0 w-80 h-full shadow-lg p-6 z-50 bg-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex">
          <div className="po_logo" onClick={() => setIsMenuOpen(false)}>
            <Link href="/">
              <Image
                src="/images/Logo.svg"
                alt="pysquad_logo"
                priority
                width={200}
                height={30}
                style={{ width: 200, height: 30 }}
              />
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
              <a>
                A 605, Shilp Aaron, Sindhubhavan Road, Ahmedabad
              </a>
            </div>
            <div className="text-sm mt-2 flex">
              <span>📧</span>
              <p>
                <a href="mailto:solutions@pysquad.com">solutions@pysquad</a>
              </p>
            </div>
            <div className="text-sm mt-2 flex">
              <span>📞</span> <span>+91 9898295005</span>
            </div>
          </div>

          <button
            onClick={handleCalendlyPopup}
            className="font-medium py-2 px-4 bg-primary text-white rounded-full mt-4"
          >
            Book A Call
          </button>
        </div>
      </div>

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
