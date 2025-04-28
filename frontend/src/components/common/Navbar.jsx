import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo or Brand */}
        <div className="text-xl font-semibold tracking-tight">MedCertify</div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <Link to={"/"} className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            to={"/service"}
            className="hover:text-gray-900 transition-colors"
          >
            Services
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
