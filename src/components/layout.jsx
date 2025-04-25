import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
