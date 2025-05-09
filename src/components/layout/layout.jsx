import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Navbar from "../header/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
