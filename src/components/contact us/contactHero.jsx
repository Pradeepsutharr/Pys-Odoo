import React from "react";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section>
      <div className="flex flex-col items-center bg-[#151922] justify-center py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-paragraph font-regular text-xl mt-5 max-w-4xl">
          Every great solution starts with a simple conversation. Whether you
          have a question, an idea, or a challenge to solve — let’s connect and
          create something remarkable together.
        </p>

        <div className="social-contact flex gap-4 mt-8">
          <Link
            href="https://www.linkedin.com/company/pysquad-informatics/"
            target="_blank"
            className="text-heading hover:bg-[#0077B5] hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link
            href="https://www.instagram.com/pysquad_informatics/"
            target="_blank"
            className="text-heading hover:bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            href="https://www.facebook.com/people/PySquad/61554988294334/#"
            target="_blank"
            className="text-heading hover:bg-[#1877F2] hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link
            href="https://twitter.com/pysquad_info"
            target="_blank"
            className="text-heading hover:bg-black hover:text-white duration-200 bg-gray-200 min-h-10 min-w-10 rounded-full flex justify-center items-center"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
