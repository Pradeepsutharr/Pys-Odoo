import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-paragraph text-sm font-regular">
      <div className="container py-10">
        <div className="flex flex-wrap justify-between">
          <div className="col-12 md:col-6 lg:col-4">
            <img src="/images//logo.svg" alt="Pysquad Logo" className="mb-4" />
            <p className="mb-4 max-w-xs">
              Contact us today to learn more about how PySquad Informatics can
              help your business succeed with our Web, App, AI and Cloud
              services.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <svg
                  className="w-5 h-5 fill-primary hover:fill-heading"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.354 8.354 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.149 4.83a4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 2.8 9.713v.051a4.107 4.107 0 0 0 3.292 4.022 4.1 4.1 0 0 1-1.085.145 4.14 4.14 0 0 1-.773-.074 4.109 4.109 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <svg
                  className="w-5 h-5 fill-primary hover:fill-heading"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.761 0 5-2.24 5-5v-14c0-2.76-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.025-3.062-1.867-3.062-1.868 0-2.154 1.459-2.154 2.965v5.701h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.839-1.561 3.034 0 3.594 1.996 3.594 4.59v5.604z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook">
                <svg
                  className="w-5 h-5 fill-primary hover:fill-heading"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0h-21.352c-.732 0-1.324.592-1.324 1.324v21.351c0 .733.592 1.325 1.324 1.325h11.494v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.324-.592 1.324-1.325v-21.35c0-.732-.592-1.324-1.324-1.324z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram">
                <svg
                  className="w-5 h-5 fill-primary hover:fill-heading"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.427.415a4.92 4.92 0 0 1 1.788 1.04 4.92 4.92 0 0 1 1.04 1.788c.169.457.359 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.427a4.92 4.92 0 0 1-1.04 1.788 4.92 4.92 0 0 1-1.788 1.04c-.457.169-1.257.359-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.427-.415a4.92 4.92 0 0 1-1.788-1.04 4.92 4.92 0 0 1-1.04-1.788c-.169-.457-.359-1.257-.415-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.427a4.92 4.92 0 0 1 1.04-1.788 4.92 4.92 0 0 1 1.788-1.04c.457-.169 1.257-.359 2.427-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.012-4.947.072-1.281.061-2.15.27-2.908.57a7.01 7.01 0 0 0-2.548 1.633 7.01 7.01 0 0 0-1.633 2.548c-.3.758-.509 1.627-.57 2.908-.06 1.28-.072 1.69-.072 4.947s.012 3.667.072 4.947c.061 1.281.27 2.15.57 2.908a7.01 7.01 0 0 0 1.633 2.548 7.01 7.01 0 0 0 2.548 1.633c.758.3 1.627.509 2.908.57 1.28.06 1.69.072 4.947.072s3.667-.012 4.947-.072c1.281-.061 2.15-.27 2.908-.57a7.01 7.01 0 0 0 2.548-1.633 7.01 7.01 0 0 0 1.633-2.548c.3-.758.509-1.627.57-2.908.06-1.28.072-1.69.072-4.947s-.012-3.667-.072-4.947c-.061-1.281-.27-2.15-.57-2.908a7.01 7.01 0 0 0-1.633-2.548 7.01 7.01 0 0 0-2.548-1.633c-.758-.3-1.627-.509-2.908-.57-1.28-.06-1.69-.072-4.947-.072z" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 md:col-6 lg:col-4 mt-8 md:mt-0">
            <div className="mx-auto lg:w-72">
              <h3 className="text-heading text-xl font-bold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-paragraph ">
                <li className="font-regular hover:text-primary duration-300">
                  <Link href=""> Home</Link>
                </li>
                <li className="font-regular hover:text-primary duration-300">
                  <Link href="">About Us</Link>
                </li>
                <li className="font-regular hover:text-primary duration-300">
                  <Link href="">Services</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 md:col-6 lg:col-4 mt-8 md:mt-0">
            <h3 className="text-heading font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-primary" viewBox="0 0 24 24">
                  <path d="M6.6 10.2c1.6 3.6 4.6 6.6 8.2 8.2l2.8-2.8c.4-.4 1-.4 1.4 0l3.4 3.4c.4.4.4 1 0 1.4l-2.6 2.6c-.4.4-1.1.4-1.5 0-6.4-3.1-11.5-8.2-14.6-14.6-.4-.4-.4-1.1 0-1.5L3.8 1.4c.4-.4 1-.4 1.4 0l3.4 3.4c.4.4.4 1 0 1.4l-2.8 2.8z" />
                </svg>
                <a
                  href="tel:+91 9898295005"
                  className="font-regular text-paragraph"
                >
                  Call Us: +91 9898295005
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-primary" viewBox="0 0 24 24">
                  <path d="M12 13.5l-11.25-7.5v15h22.5v-15zM0 4.5v1.5l12 8 12-8v-1.5h-24z" />
                </svg>
                <a
                  href="mailto:solutions@pysquad.com"
                  className="font-regular text-paragraph"
                >
                  solutions@pysquad.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 fill-primary" viewBox="0 0 24 24">
                  <path d="M12 2c-4.97 0-9 4.03-9 9 0 6.63 9 13 9 13s9-6.37 9-13c0-4.97-4.03-9-9-9zm0 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <address className="font-regular text-paragraph ">
                  A 605, Shilp Aaron, Sindhu Bhavan Road,Ahmedabad, IN 380054,
                  India
                </address>

                <br />

                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-200 text-xs">
        All copyrights are reserved @Pysquad Informatics
      </div>
    </footer>
  );
};

export default Footer;
