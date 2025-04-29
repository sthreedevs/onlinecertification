import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left: Brand Name */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MedCertify. All rights reserved.
        </p>

        {/* Right: Minimal Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            to={"/privacy-policy"}
            className="text-gray-500 hover:text-gray-700 text-sm transition"
          >
            Privacy
          </Link>
          <Link
            to={"/terms-conditions"}
            className="text-gray-500 hover:text-gray-700 text-sm transition"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
